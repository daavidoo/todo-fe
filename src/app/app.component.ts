import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { TranslateModule } from '@ngx-translate/core'

import { HeaderComponent } from './shared/components/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-fe'
}
