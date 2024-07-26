import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core'

import { TranslateModule, TranslateService } from '@ngx-translate/core'

import { MemoizePipe } from '../../../pipes/memoize.pipe'

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [TranslateModule, MemoizePipe],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  readonly header = input<string | null>()
  readonly translate = inject(TranslateService)
  readonly dialogRef = inject(DialogRef)

  getHeader(header: string | null): string {
    if (!header) {
      return ''
    }

    return this.translate.instant(header)
  }
}
