import { UserInfo } from '../../models/user.model'

export namespace AuthActions {
  export class Login {
    static readonly type = '[Login/Auth] login'
  }

  export class Logout {
    static readonly type = '[Logout/Auth] logout'
  }

  export class SetLoginResponse {
    static readonly type = '[SetLoginResponse/Auth] set login response'

    constructor(readonly userInfo: UserInfo) {}
  }
}
