import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"
    >
      <form
        class="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6"
        (ngSubmit)="onLogin()"
      >
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">
          Đăng nhập Admin
        </h2>
        <div class="flex flex-col gap-2">
          <label class="font-medium text-gray-700">Email</label>
          <input
            class="border border-gray-300 rounded px-3 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            [(ngModel)]="email"
            name="email"
            type="email"
            required
            autocomplete="username"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium text-gray-700">Mật khẩu</label>
          <input
            class="border border-gray-300 rounded px-3 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            [(ngModel)]="password"
            name="password"
            type="password"
            required
            autocomplete="current-password"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        >
          Đăng nhập
        </button>
        <div *ngIf="error" class="text-red-500 text-sm mt-2 text-center">
          {{ error }}
        </div>
      </form>
    </div>
  `,
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  constructor(private router: Router, private auth: AuthService) {}
  onLogin() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Email hoặc mật khẩu không đúng!';
    }
  }
}
