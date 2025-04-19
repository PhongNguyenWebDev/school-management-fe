import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="flex-1 h-full min-h-0 overflow-y-auto bg-gray-50 p-6">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class MainBodyComponent {}
