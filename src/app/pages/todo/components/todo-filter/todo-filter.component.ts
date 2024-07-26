import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'
import { Store } from '@ngxs/store'

import { TodoFilterState } from '../../../../shared/enums/todo-filter-state.enum'
import { selectToSignal } from '../../../../shared/utils/general'
import { TodoActions } from '../../state/todo.actions'
import { TodoStateQueries } from '../../state/todo.state-queries'

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFilterComponent {
  readonly options = Object.values(TodoFilterState) as TodoFilterState[]
  readonly state = selectToSignal(TodoStateQueries.filter)

  private readonly store = inject(Store)

  onChangeState(state: TodoFilterState): void {
    this.store.dispatch(new TodoActions.SetFilter(state))
  }
}
