import { Injectable, inject } from '@angular/core'

import { Action, State, StateContext, Store } from '@ngxs/store'
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc'

import { UserInfo } from '../../models/user.model'
import { AuthActions } from './auth.actions'
import { environment } from '../../../../environments/environment'

export interface AuthStateModel {
  userInfo: UserInfo | null
}

@State<AuthStateModel>({ name: 'auth', defaults: { userInfo: null } })
@Injectable({ providedIn: 'root' })
export class AuthState {
  private readonly oAuthService = inject(OAuthService)
  private readonly store = inject(Store)

  constructor() {
    this.initConfiguration()
  }

  @Action(AuthActions.Login)
  login(): void {
    this.oAuthService.initImplicitFlow()
  }

  @Action(AuthActions.Logout)
  logout(ctx: StateContext<AuthStateModel>): void {
    this.oAuthService.revokeTokenAndLogout()
    this.oAuthService.logOut()
    ctx.patchState({ userInfo: null })
  }

  @Action(AuthActions.SetLoginResponse)
  setLoginResponse(ctx: StateContext<AuthStateModel>, { userInfo }: AuthActions.SetLoginResponse) {
    ctx.patchState({ userInfo })
  }

  private async initConfiguration(): Promise<void> {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: environment.clientId,
      redirectUri: window.location.origin + '/todo',
      scope: 'openid profile email',
    }

    this.oAuthService.configure(authConfig)
    this.oAuthService.setupAutomaticSilentRefresh()
    await this.oAuthService.loadDiscoveryDocumentAndTryLogin()

    if (this.oAuthService.hasValidIdToken()) {
      const claims = this.oAuthService.getIdentityClaims()
      if (claims) {
        this.store.dispatch(new AuthActions.SetLoginResponse(claims as UserInfo))
      }
    }
  }
}
