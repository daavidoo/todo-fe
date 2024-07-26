import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { ReactiveFormsModule, Validators } from '@angular/forms'

import { BaseFormInstance } from '../../../../shared/base/base-form-instance'
import { ButtonComponent } from '../../../../shared/components/button/button.component'
import { DialogComponent } from '../../../../shared/components/dialogs/dialog/dialog.component'
import { FormInputDateComponent } from '../../../../shared/components/forms/form-input-date/form-input-date.component'
import { FormInputComponent } from '../../../../shared/components/forms/form-input/form-input.component'
import { FormTextareaComponent } from '../../../../shared/components/forms/form-textarea/form-textarea.component'
import { TodoFFNames } from '../../../../shared/enums/forms/todo.ff-names'
import { Todo } from '../../../../shared/models/todo.model'
import { MemoizePipe } from '../../../../shared/pipes/memoize.pipe'
import { injectMatDialogData } from '../../../../shared/utils/general'

@Component({
  selector: 'app-add-todo-dialog',
  standalone: true,
  imports: [
    ButtonComponent,
    DialogComponent,
    FormInputComponent,
    FormInputDateComponent,
    FormTextareaComponent,
    ReactiveFormsModule,
    MemoizePipe,
  ],
  templateUrl: './add-todo-dialog.component.html',
  styleUrl: './add-todo-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoDialogComponent extends BaseFormInstance {
  override readonly ffNames = TodoFFNames

  readonly data = injectMatDialogData<Todo | undefined>()
  readonly dialogRef = inject(DialogRef)

  initForm(): void {
    this.formGroup = this.fb.group({
      [this.ffNames.Title]: [this.data?.title, Validators.required],
    })
  }

  getDialogTitle(id: string | undefined): string {
    return `todo.${id ? 'addList' : 'editList'}`
  }

  onSubmitClick(): void {
    this.formGroup.markAllAsTouched()
    if (this.formGroup.invalid) {
      return
    }

    this.dialogRef.close(this.formGroup.getRawValue())
  }

  onCancelClick(): void {
    this.dialogRef.close(null)
  }
}
