import { animate, style, transition, trigger } from '@angular/animations'
import { Dialog } from '@angular/cdk/dialog'
import { NgForOf } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FormsModule } from '@angular/forms'

import { Observable, filter, tap } from 'rxjs'

import { TranslateModule } from '@ngx-translate/core'
import { Store } from '@ngxs/store'

import { ConfirmDialogService } from '../../../../shared/components/dialogs/confirm-dialog/confirm-dialog.service'
import { IconComponent } from '../../../../shared/components/icon/icon.component'
import { TodoFilterState } from '../../../../shared/enums/todo-filter-state.enum'
import { TodoItem } from '../../../../shared/models/todo-item.model'
import { Todo } from '../../../../shared/models/todo.model'
import { AuthStateQueries } from '../../../../shared/states/auth/auth.state-queries'
import { selectToSignal } from '../../../../shared/utils/general'
import { TodoActions } from '../../state/todo.actions'
import { TodoStateQueries } from '../../state/todo.state-queries'
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component'
import { AddTodoItemDialogComponent } from '../add-todo-item-dialog/add-todo-item-dialog.component'
import { TodoItemComponent } from '../todo-item/todo-item.component'

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, NgForOf, TranslateModule, FormsModule, IconComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ height: 0, opacity: 0 }))]),
    ]),
  ],
})
export class TodoListComponent {
  readonly todo = input<Todo>()

  readonly filterValueTmp = viewChild<ElementRef<HTMLInputElement>>('filterValueTmp')

  readonly isLogged = selectToSignal(AuthStateQueries.isLogged)
  readonly filterState = selectToSignal(TodoStateQueries.filter)

  readonly isFilterVisible = signal(false)
  readonly filterValue = signal('')
  readonly filteredItems = computed<TodoItem[] | undefined>(() => {
    const currentTodo = this.todo()
    if (!currentTodo) {
      return []
    }

    return currentTodo.items.filter((item) => this.matchesFilter(item))
  })

  private readonly dialog = inject(Dialog)
  private readonly store = inject(Store)
  private readonly destroy = inject(DestroyRef)
  private readonly confirmDialogService = inject(ConfirmDialogService)

  onAddTodoClick(): void {
    this.dialog
      .open<TodoItem>(AddTodoItemDialogComponent)
      .closed.pipe(
        filter((result) => !!result),
        tap((result) => this.store.dispatch(new TodoActions.AddTodoItem(this.todo()!.id, result!))),
        takeUntilDestroyed(this.destroy),
      )
      .subscribe()
  }

  onToggleFilterClick(): void {
    this.isFilterVisible.update((value) => !value)

    setTimeout(() => {
      if (this.isFilterVisible()) {
        this.filterValueTmp()?.nativeElement.focus()
      }
    }, 50)
  }

  onEditClick(): void {
    this.dialog
      .open<Todo, Todo>(AddTodoDialogComponent, { data: this.todo() })
      .closed.pipe(
        filter((result) => !!result),
        tap((result) => this.store.dispatch(new TodoActions.Update({ ...this.todo(), ...result }))),
        takeUntilDestroyed(this.destroy),
      )
      .subscribe()
  }

  onDeleteListClick(): void {
    this.onDeleteClick()
      .pipe(
        tap(() => this.store.dispatch(new TodoActions.Delete(this.todo()!.id))),
        takeUntilDestroyed(this.destroy),
      )
      .subscribe()
  }

  onEditItemClick(item: TodoItem): void {
    this.dialog
      .open<TodoItem, TodoItem>(AddTodoItemDialogComponent, { data: item })
      .closed.pipe(
        filter((result) => !!result),
        tap((result) =>
          this.store.dispatch(new TodoActions.UpdateTodoItem(this.todo()!.id, result)),
        ),
        takeUntilDestroyed(this.destroy),
      )
      .subscribe()
  }

  onFinishClick(item: TodoItem): void {
    this.store.dispatch(
      new TodoActions.UpdateTodoItem(this.todo()!.id, { ...item, finished: !item.finished }),
    )
  }

  onDeleteItemClick(id: string): void {
    this.onDeleteClick()
      .pipe(
        tap(() => this.store.dispatch(new TodoActions.DeleteTodoItem(this.todo()!.id, id))),
        takeUntilDestroyed(this.destroy),
      )
      .subscribe()
  }

  private onDeleteClick(): Observable<boolean | undefined> {
    return this.confirmDialogService
      .confirm('msg.confirm.removeItem')
      .pipe(filter((result) => !!result))
  }

  private matchesFilter(todoItem: TodoItem): boolean {
    let isFilterValid = true

    switch (this.filterState()) {
      case TodoFilterState.All:
        isFilterValid = true
        break
      case TodoFilterState.Active:
        isFilterValid = !todoItem.finished
        break
      case TodoFilterState.Finished:
        isFilterValid = todoItem.finished
        break
    }

    const lowerFilterValue = this.filterValue().toLowerCase()
    const matchesTitle = todoItem.title.toLowerCase().includes(lowerFilterValue)
    const matchesContent = todoItem.content.toLowerCase().includes(lowerFilterValue)

    return isFilterValid && (matchesTitle || matchesContent)
  }
}
