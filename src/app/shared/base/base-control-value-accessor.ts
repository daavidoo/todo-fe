import { Directive, signal } from '@angular/core'
import { ControlValueAccessor } from '@angular/forms'

@Directive()
export class BaseControlValueAccessor implements ControlValueAccessor {
  protected readonly value = signal<any>(null)
  protected readonly isDisabled = signal(false)

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled)
  }

  writeValue(obj: any): void {
    this.value.set(obj)
  }

  protected onTouch: () => void = () => {}

  protected onChange: (value: string) => void = () => {}
}
