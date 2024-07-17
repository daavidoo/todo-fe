import { HttpClient, provideHttpClient } from '@angular/common/http'
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'

import { firstValueFrom } from 'rxjs'

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (httpClient: HttpClient) =>
            new TranslateHttpLoader(httpClient, '/public/i18n/', '.json'),
          deps: [HttpClient],
        },
        defaultLanguage: 'sk',
      }),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: (translate: TranslateService) => () => firstValueFrom(translate.use('sk')),
      deps: [TranslateService],
      multi: true,
    },
  ],
}
