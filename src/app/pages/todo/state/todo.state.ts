import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { Observable, tap } from 'rxjs'

import { Action, State, StateContext } from '@ngxs/store'

import { environment } from '../../../../environments/environment'
import { TodoFilterState } from '../../../shared/enums/todo-filter-state.enum'
import { TodoItem } from '../../../shared/models/todo-item.model'
import { Todo } from '../../../shared/models/todo.model'
import { TodoActions } from './todo.actions'

export interface TodoStateModel {
  todos: Todo[]
  filter: TodoFilterState
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
    filter: TodoFilterState.All,
  },
})
@Injectable({ providedIn: 'root' })
export class TodoState {
  private readonly url = environment.serverUrl
  private readonly httpClient = inject(HttpClient)

  @Action(TodoActions.SetFilter)
  setFilter(ctx: StateContext<TodoStateModel>, { state }: TodoActions.SetFilter): void {
    ctx.patchState({ filter: state })
  }

  @Action(TodoActions.List)
  list(ctx: StateContext<TodoStateModel>): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(this.url)
      .pipe(tap((response) => ctx.patchState({ todos: response })))
  }

  @Action(TodoActions.Create)
  create(ctx: StateContext<TodoStateModel>, { todo }: TodoActions.Create): Observable<Todo> {
    return this.httpClient
      .post<Todo>(`${this.url}`, todo)
      .pipe(tap((response) => ctx.patchState({ todos: [...ctx.getState().todos, response] })))
  }

  @Action(TodoActions.Update)
  update(ctx: StateContext<TodoStateModel>, { todo }: TodoActions.Update): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.url}/${todo.id}`, todo).pipe(
      tap((response) =>
        ctx.patchState({
          todos: [...ctx.getState().todos.filter((child) => child.id !== todo.id), response],
        }),
      ),
    )
  }

  @Action(TodoActions.Delete)
  delete(ctx: StateContext<TodoStateModel>, { id }: TodoActions.Delete): Observable<Todo> {
    return this.httpClient
      .delete<Todo>(`${this.url}/${id}`)
      .pipe(tap(() => ctx.dispatch(new TodoActions.List())))
  }

  @Action(TodoActions.AddTodoItem)
  addTodoItem(
    ctx: StateContext<TodoStateModel>,
    { id, todoItem }: TodoActions.AddTodoItem,
  ): Observable<Todo> {
    const request = this.modifyItem(ctx, id, (item) => [
      ...item.items,
      { ...todoItem, id: window.crypto.randomUUID() },
    ])

    return this.httpClient
      .put<Todo>(`${this.url}/${id}`, request)
      .pipe(tap((response) => this.updateItem(ctx, id, response)))
  }

  @Action(TodoActions.UpdateTodoItem)
  updateTodoItem(
    ctx: StateContext<TodoStateModel>,
    { id, todoItem }: TodoActions.UpdateTodoItem,
  ): Observable<Todo> {
    const request = this.modifyItem(ctx, id, (item) =>
      item.items.map((child) => (child.id === todoItem.id ? todoItem : child)),
    )

    return this.httpClient
      .put<Todo>(`${this.url}/${id}`, request)
      .pipe(tap((response) => this.updateItem(ctx, id, response)))
  }

  @Action(TodoActions.DeleteTodoItem)
  deleteTodoItem(
    ctx: StateContext<TodoStateModel>,
    { id, itemId }: TodoActions.DeleteTodoItem,
  ): Observable<Todo> {
    const request = this.modifyItem(ctx, id, (item) =>
      item.items.filter((item) => item.id !== itemId),
    )

    return this.httpClient
      .put<Todo>(`${this.url}/${id}`, request)
      .pipe(tap((response) => this.updateItem(ctx, id, response)))
  }

  private modifyItem(
    ctx: StateContext<TodoStateModel>,
    id: string,
    modifyFn: (item: Todo) => TodoItem[],
  ): Todo {
    const request = ctx.getState().todos.find((todo) => todo.id === id)
    if (request) {
      request.items = modifyFn(request)
    } else {
      throw new Error('Todo item not found!')
    }

    return request
  }

  private updateItem(ctx: StateContext<TodoStateModel>, id: string, item: Todo): void {
    ctx.patchState({
      todos: ctx.getState().todos.map((todo) => (todo.id === id ? item : todo)),
    })
  }
}
