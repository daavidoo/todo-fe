import { Selector } from '@ngxs/store'

import { UserInfo } from '../../models/user.model'
import { AuthState, AuthStateModel } from './auth.state'

export class AuthStateQueries {
  @Selector([AuthState])
  static isLogged(state: AuthStateModel): boolean {
    return !!state.userInfo
  }

  @Selector([AuthState])
  static userInfo(state: AuthStateModel): UserInfo | null {
    return state.userInfo
  }
}
