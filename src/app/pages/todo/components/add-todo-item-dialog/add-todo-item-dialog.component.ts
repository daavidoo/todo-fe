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
import { TodoItem } from '../../../../shared/models/todo-item.model'
import { MemoizePipe } from '../../../../shared/pipes/memoize.pipe'
import { injectMatDialogData } from '../../../../shared/utils/general'

@Component({
  selector: 'app-add-todo-item-dialog',
  standalone: true,
  imports: [
    DialogComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FormInputComponent,
    FormTextareaComponent,
    FormInputDateComponent,
    MemoizePipe,
  ],
  templateUrl: './add-todo-item-dialog.component.html',
  styleUrl: './add-todo-item-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoItemDialogComponent extends BaseFormInstance {
  override readonly ffNames = TodoFFNames
  readonly dialogRef = inject(DialogRef)
  readonly data = injectMatDialogData<TodoItem | null>()

  initForm(): void {
    this.formGroup = this.fb.group({
      [this.ffNames.Id]: [this.data?.id],
      [this.ffNames.Title]: [this.data?.title, Validators.required],
      [this.ffNames.Content]: [this.data?.content, Validators.required],
      [this.ffNames.Deadline]: [this.data?.deadline, Validators.required],
      [this.ffNames.Finished]: [this.data?.finished ?? false],
    })
  }

  getDialogTitle(): string {
    return `todo.${this.data?.id ? 'editItem' : 'addItem'}`
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
