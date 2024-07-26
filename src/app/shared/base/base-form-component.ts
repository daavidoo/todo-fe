import { AfterViewInit, DestroyRef, Directive, inject, input, model, signal } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { NgControl, Validators } from '@angular/forms'

import { BehaviorSubject, startWith, tap } from 'rxjs'

import { TranslateService } from '@ngx-translate/core'

import { BaseControlValueAccessor } from './base-control-value-accessor'

@Directive()
export class BaseFormComponent extends BaseControlValueAccessor implements AfterViewInit {
  label = input<string | null>(null)
  preventTranslate = input<boolean>(false)
  cssClass = input<{ [prop: string]: boolean } | null>()
  placeholder = input<string | null>()
  errorMessage = model<string | null>()

  readonly isRequired = signal<boolean>(false)
  readonly internalErrorMessage = signal<string | null>(null)

  readonly isTouchedObs$ = new BehaviorSubject(false)

  readonly ngControl = inject(NgControl, { self: true, optional: true })
  readonly destroy = inject(DestroyRef)
  readonly translate = inject(TranslateService)

  constructor() {
    super()

    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  ngAfterViewInit(): void {
    if (!this.ngControl || !this.ngControl?.control?.events) {
      return
    }

    this.ngControl.control?.events
      ?.pipe(
        startWith(null),
        tap(() => this.evaluateChanges()),
        takeUntilDestroyed(this.destroy),
      )
      .subscribe()
  }

  setValue(value: any): void {
    this.value.set(value)
    this.onChange(value)
  }

  getCssClass(): { [prop: string]: boolean } {
    let cssClass: { [prop: string]: boolean } = {}
    if (this.cssClass()) {
      cssClass = { ...this.cssClass() }
    }

    if (this.errorMessage()) {
      cssClass['has-error'] = true
    }

    return cssClass
  }

  getLabel(): string {
    if (this.preventTranslate()) {
      return this.label() as string
    }

    return this.translate.instant(this.label() as string)
  }

  private evaluateChanges(): void {
    this.isRequired.set(this.ngControl?.control?.hasValidator(Validators.required) ?? false)
    this.errorMessage.set(this.getErrorMessage())
  }

  private getErrorMessage() {
    if (!this.ngControl) {
      return null
    }

    const errorNames = this.ngControl?.errors && Object.keys(this.ngControl.errors)
    if (!errorNames?.length) {
      return null
    }

    if (this.ngControl.invalid && (this.ngControl.dirty || this.ngControl.touched)) {
      return this.translate.instant(`form.validation.${errorNames[0]}`, {
        field: this.preventTranslate()
          ? this.label()
          : this.translate.instant(this.label() as string),
        data: this.ngControl.errors?.[errorNames[0]],
      })
    }

    return null
  }
}
