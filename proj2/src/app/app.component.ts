import { Component, inject, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proj2';

  #domSanitizer = inject(DomSanitizer);

  constructor() {
    this.#domSanitizer.sanitize(SecurityContext.RESOURCE_URL,  new URL(''));
  }
}
