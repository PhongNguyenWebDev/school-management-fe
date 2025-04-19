import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, MainBodyComponent],
  template: `
    <div class="h-screen w-screen overflow-hidden">
      <app-sidebar class="fixed left-0 top-0 h-screen w-64 z-30"></app-sidebar>
      <div class="pl-64 h-screen flex flex-col">
        <app-header class="fixed top-0 left-64 right-0 h-16 z-20"></app-header>
        <div class="pt-16 flex-1 h-[calc(100vh-4rem)] overflow-hidden">
          <app-main-body></app-main-body>
        </div>
      </div>
    </div>
  `,
})
export class MainLayoutComponent {}
