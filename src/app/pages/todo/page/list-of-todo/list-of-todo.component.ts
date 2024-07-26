import { animate, style, transition, trigger } from '@angular/animations'
import { Dialog } from '@angular/cdk/dialog'
import { JsonPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

import { filter, tap } from 'rxjs'

import { TranslateModule } from '@ngx-translate/core'
import { Store } from '@ngxs/store'

import { IconComponent } from '../../../../shared/components/icon/icon.component'
import { Todo } from '../../../../shared/models/todo.model'
import { AuthStateQueries } from '../../../../shared/states/auth/auth.state-queries'
import { selectToSignal } from '../../../../shared/utils/general'
import { AddTodoDialogComponent } from '../../components/add-todo-dialog/add-todo-dialog.component'
import { TodoFilterComponent } from '../../components/todo-filter/todo-filter.component'
import { TodoListComponent } from '../../components/todo-list/todo-list.component'
import { TodoActions } from '../../state/todo.actions'
import { TodoStateQueries } from '../../state/todo.state-queries'

@Component({
  selector: 'app-list-of-todo',
  standalone: true,
  imports: [TodoListComponent, JsonPipe, TranslateModule, TodoFilterComponent, IconComponent],
  templateUrl: './list-of-todo.component.html',
  styleUrl: './list-of-todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ListOfTodoComponent implements OnInit {
  readonly isLogged = selectToSignal(AuthStateQueries.isLogged)
  readonly todos = selectToSignal(TodoStateQueries.list)
  readonly store = inject(Store)
  readonly dialog = inject(Dialog)
  readonly destroy = inject(DestroyRef)

  ngOnInit(): void {
    this.store.dispatch(new TodoActions.List())
  }

  onAddClick(): void {
    this.dialog
      .open<Todo>(AddTodoDialogComponent)
      .closed.pipe(
        filter((result) => !!result),
        tap((result) => this.store.dispatch(new TodoActions.Create(result!))),
        takeUntilDestroyed(this.destroy),
      )
      .subscribe()
  }
}
