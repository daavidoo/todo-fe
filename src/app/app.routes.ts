import { inject } from '@angular/core'
import { Routes } from '@angular/router'

import { Store, provideStates } from '@ngxs/store'

import { TodoState } from './pages/todo/state/todo.state'
import { Navigation } from './shared/enums/navigation.enum'
import { AuthStateQueries } from './shared/states/auth/auth.state-queries'

export const routes: Routes = [
  { path: '', redirectTo: Navigation.Todo, pathMatch: 'full' },
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
  { path: '**', redirectTo: Navigation.Todo, pathMatch: 'full' },
]
