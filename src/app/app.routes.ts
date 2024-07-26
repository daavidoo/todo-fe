import { inject } from '@angular/core'
import { Routes } from '@angular/router'

import { Store, provideStates } from '@ngxs/store'

import { TodoState } from './pages/todo/state/todo.state'
import { Navigation } from './shared/enums/navigation.enum'
import { AuthStateQueries } from './shared/states/auth/auth.state-queries'
import { getDefaultRoutes } from './shared/utils/general'

export const routes: Routes = [
  {
    path: Navigation.Todo,
    loadChildren: () => import('./pages/todo/todo.routes').then((r) => r.routes),
    providers: [provideStates([TodoState])],
  },
  {
    path: Navigation.User,
    loadChildren: () => import('./pages/user/use.routes').then((r) => r.routes),
    canActivate: [() => inject(Store).selectSnapshot(AuthStateQueries.isLogged)],
  },

  ...getDefaultRoutes(Navigation.Todo),
]
