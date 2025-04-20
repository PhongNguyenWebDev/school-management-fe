import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { AuthService } from './core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, LoginLayoutComponent],
  template: `
    <app-login-layout *ngIf="!auth.isLoggedIn(); else main"></app-login-layout>
    <ng-template #main>
      <app-main-layout></app-main-layout>
    </ng-template>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SchoolManagement';
  constructor(public auth: AuthService) {}
}
