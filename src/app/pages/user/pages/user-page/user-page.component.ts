import { JsonPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'

import { AuthStateQueries } from '../../../../shared/states/auth/auth.state-queries'
import { selectToSignal } from '../../../../shared/utils/general'
import { TodoFilterComponent } from '../../../todo/components/todo-filter/todo-filter.component'
import { TodoListComponent } from '../../../todo/components/todo-list/todo-list.component'

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [TodoFilterComponent, TodoListComponent, TranslateModule, JsonPipe],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent {
  readonly userInfo = selectToSignal(AuthStateQueries.userInfo)
}
