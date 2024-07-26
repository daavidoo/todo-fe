import { DIALOG_DATA } from '@angular/cdk/dialog'
import { Signal, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Route } from '@angular/router'

import { Store } from '@ngxs/store'

export function getDefaultRoutes(path: string): Route[] {
  return [
    { path: '', redirectTo: path, pathMatch: 'full' },
    { path: '**', redirectTo: path, pathMatch: 'full' },
  ]
}

export function selectToSignal<T, S>(selector: (state: S) => T): Signal<T | undefined> {
  const store = inject(Store)

  return toSignal<T>(store.select(selector), {
    initialValue: store.selectSnapshot(selector),
  } as {
    initialValue?: undefined
  })
}

export function injectMatDialogData<T>(): T {
  return inject(DIALOG_DATA)
}
