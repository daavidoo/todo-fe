import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core'
import { RouterLink } from '@angular/router'

import { TranslateService } from '@ngx-translate/core'

import { MemoizePipe } from '../../pipes/memoize.pipe'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, RouterLink, MemoizePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly clicked = output<void>()

  readonly label = input<string | null>()
  readonly preventTranslate = input<boolean>(false)
  readonly cssClass = input<string | null>()
  readonly type = input<'primary' | 'secondary' | 'outline'>('primary')
  readonly passedRouterLink = input<(number | string)[]>([])

  readonly translate = inject(TranslateService)

  getCssClass(): { [prop: string]: boolean } {
    const result: { [prop: string]: boolean } = { btn: true, 'w-full': true }
    if (this.cssClass && typeof this.cssClass() === 'string') {
      result[this.cssClass() as string] = true
    }

    if (this.type() === 'primary') {
      result['btn-primary'] = true
    } else if (this.type() === 'secondary') {
      result['btn-secondary'] = true
    } else if (this.type() === 'outline') {
      result['btn-outline'] = true
    }

    return result
  }

  getLabel(): string {
    if (this.preventTranslate()) {
      return this.label() as string
    }

    return this.translate.instant(this.label() as string)
  }
}
