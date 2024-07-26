import { registerLocaleData } from '@angular/common'
import { HttpClient, provideHttpClient } from '@angular/common/http'
import localeSk from '@angular/common/locales/sk'
import {
  APP_INITIALIZER,
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideRouter } from '@angular/router'

import { firstValueFrom } from 'rxjs'

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { provideStates, provideStore } from '@ngxs/store'
import { provideOAuthClient } from 'angular-oauth2-oidc'

import { routes } from './app.routes'
import { AuthState } from './shared/states/auth/auth.state'

registerLocaleData(localeSk, 'sk')

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideOAuthClient(),
    provideStates([AuthState]),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (httpClient: HttpClient) =>
            new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json'),
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
    {
      provide: LOCALE_ID,
      useValue: 'sk',
    },
  ],
}
