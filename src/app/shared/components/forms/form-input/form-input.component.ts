import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { BaseFormComponent } from '../../../base/base-form-component'
import { MemoizePipe } from '../../../pipes/memoize.pipe'
import { FormLabelComponent } from '../form-label/form-label.component'

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [FormLabelComponent, MemoizePipe, FormsModule, NgClass],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent extends BaseFormComponent {
  override readonly placeholder = input(this.translate.instant('form.placeholder.input.text'))
  readonly type = input<'text' | 'number' | 'password'>('text')
}
