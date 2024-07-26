import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'

import { ButtonComponent } from '../../button/button.component'
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [DialogComponent, TranslateModule, ButtonComponent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  readonly data = inject<string>(DIALOG_DATA)
  readonly dialogRef = inject(DialogRef)
}
