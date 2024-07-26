import { JsonPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'

import { TranslateModule } from '@ngx-translate/core'
import { Store } from '@ngxs/store'

import { Navigation } from '../../enums/navigation.enum'
import { AuthActions } from '../../states/auth/auth.actions'
import { AuthStateQueries } from '../../states/auth/auth.state-queries'
import { selectToSignal } from '../../utils/general'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule, ButtonComponent, JsonPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly isLogged = selectToSignal(AuthStateQueries.isLogged)
  readonly userInfo = selectToSignal(AuthStateQueries.userInfo)

  readonly Navigation = Navigation
  private readonly store = inject(Store)

  onLogInClick(): void {
    this.store.dispatch(new AuthActions.Login())
  }

  onLogOutClick(): void {
    this.store.dispatch(new AuthActions.Logout())
  }
}
