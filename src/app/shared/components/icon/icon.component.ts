import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

import { MemoizePipe } from '../../pipes/memoize.pipe'

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgClass, MemoizePipe],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly iconClass = input<string | null>()
  readonly outline = input<boolean>(false)
  readonly isDisabled = input<boolean>(false)
  readonly size = input<'icon-sm'>('icon-sm')

  getCssClass(): { [prop: string]: boolean } {
    return {
      'material-icons-outlined': this.outline(),
      'cursor-pointer': !this.isDisabled(),
      [this.size()]: !!this.size(),
    }
  }
}
