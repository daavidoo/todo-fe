import { TodoFilterState } from '../../../shared/enums/todo-filter-state.enum'
import { TodoItem } from '../../../shared/models/todo-item.model'
import { Todo } from '../../../shared/models/todo.model'

export namespace TodoActions {
  export class SetFilter {
    static readonly type = '[SetFilter/Todo] set filter'

    constructor(readonly state: TodoFilterState) {}
  }

  export class List {
    static readonly type = '[List/Todo] list'
  }

  export class Create {
    static readonly type = '[Create/Todo] create'

    constructor(readonly todo: Todo) {}
  }

  export class Update {
    static readonly type = '[Update/Todo] update'

    constructor(readonly todo: Todo) {}
  }

  export class Delete {
    static readonly type = '[Delete/Todo] delete'

    constructor(readonly id: string) {}
  }

  export class AddTodoItem {
    static readonly type = '[AddTodoItem/Todo] add todo item'

    constructor(
      readonly id: string,
      readonly todoItem: TodoItem,
    ) {}
  }

  export class UpdateTodoItem {
    static readonly type = '[UpdateTodoItem/Todo] update todo item'

    constructor(
      readonly id: string,
      readonly todoItem: TodoItem,
    ) {}
  }

  export class DeleteTodoItem {
    static readonly type = '[DeleteTodoItem/Todo] delete todo item'

    constructor(
      readonly id: string,
      readonly itemId: string,
    ) {}
  }
}
