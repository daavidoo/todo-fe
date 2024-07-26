import { Directive, OnInit, inject } from '@angular/core'
import { FormGroup, UntypedFormBuilder } from '@angular/forms'

import { TranslateService } from '@ngx-translate/core'

@Directive()
export abstract class BaseFormInstance implements OnInit {
  formGroup: FormGroup = new FormGroup({})

  readonly ffNames: any

  readonly fb = inject(UntypedFormBuilder)
  readonly translate = inject(TranslateService)

  ngOnInit(): void {
    this.initForm()
  }

  getSubmitBtnTitle(id: string | undefined): string {
    return `btn.${id ? 'update' : 'create'}`
  }

  abstract initForm(): void
}
