import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [],
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLabelComponent {
  readonly label = input<string | null>()
  readonly isRequired = input<boolean>()
  readonly errorMessage = input<string | null>()
}
