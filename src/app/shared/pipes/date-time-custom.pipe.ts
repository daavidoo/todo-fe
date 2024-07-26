import { DatePipe } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Pipe({
  name: 'dateTimeCustom',
  standalone: true,
})
export class DateTimeCustomPipe extends DatePipe implements PipeTransform {
  constructor(private readonly translate: TranslateService) {
    super(translate.currentLang)
  }

  override transform(
    input: Date | string | number | null | undefined,
    format = 'dd.MM.yyyy HH:mm',
    timezone = '',
    locale = this.translate.currentLang,
  ): any {
    return super.transform(input, format, timezone, locale)
  }
}
