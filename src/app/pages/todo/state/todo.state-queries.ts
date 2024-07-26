import { Selector } from '@ngxs/store'

import { TodoFilterState } from '../../../shared/enums/todo-filter-state.enum'
import { Todo } from '../../../shared/models/todo.model'
import { TodoState, TodoStateModel } from './todo.state'

export class TodoStateQueries {
  @Selector([TodoState])
  static list(state: TodoStateModel): Todo[] {
    return state.todos
  }

  @Selector([TodoState])
  static filter(state: TodoStateModel): TodoFilterState {
    return state.filter
  }
}
