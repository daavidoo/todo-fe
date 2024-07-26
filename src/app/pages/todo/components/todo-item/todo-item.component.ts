import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

import { IconComponent } from '../../../../shared/components/icon/icon.component'
import { TodoItem } from '../../../../shared/models/todo-item.model'
import { DateTimeCustomPipe } from '../../../../shared/pipes/date-time-custom.pipe'
import { MemoizePipe } from '../../../../shared/pipes/memoize.pipe'
import { AuthStateQueries } from '../../../../shared/states/auth/auth.state-queries'
import { selectToSignal } from '../../../../shared/utils/general'

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [DateTimeCustomPipe, NgClass, MemoizePipe, IconComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  readonly onFinishClick = output<void>()
  readonly onEditClick = output<void>()
  readonly onDeleteClick = output<void>()

  readonly item = input<TodoItem | null>()
  readonly index = input<number>(0)

  readonly isLogged = selectToSignal(AuthStateQueries.isLogged)
  readonly colors = ['aqua', 'ocean', 'golden-yellow', 'magenta', 'lavender']

  getBorderColor(): string {
    return `b-${this.colors[this.index() % this.colors.length]}`
  }
}
