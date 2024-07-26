import { Dialog } from '@angular/cdk/dialog'
import { Injectable, inject } from '@angular/core'

import { Observable } from 'rxjs'

import { ConfirmDialogComponent } from './confirm-dialog.component'

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly dialog = inject(Dialog)

  confirm(message: string): Observable<boolean | undefined> {
    return this.dialog.open<boolean, string>(ConfirmDialogComponent, { data: message }).closed
  }
}
