import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"
    >
      <form
        class="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-[400px] flex flex-col gap-6 items-center"
        (ngSubmit)="onSave()"
      >
        <div
          class="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-700 mb-4"
        >
          <span>AD</span>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">Thông tin Admin</h2>
        <div class="w-full flex flex-col gap-2">
          <label class="font-medium">Tên</label>
          <input
            class="border rounded px-3 py-2 w-full"
            [(ngModel)]="profile.name"
            name="name"
            required
          />
        </div>
        <div class="w-full flex flex-col gap-2">
          <label class="font-medium">Email</label>
          <input
            class="border rounded px-3 py-2 w-full"
            [(ngModel)]="profile.email"
            name="email"
            type="email"
            required
          />
        </div>
        <div class="w-full flex flex-col gap-2">
          <label class="font-medium">Địa chỉ</label>
          <input
            class="border rounded px-3 py-2 w-full"
            [(ngModel)]="profile.address"
            name="address"
          />
        </div>
        <div class="w-full flex flex-col gap-2">
          <label class="font-medium">Mật khẩu</label>
          <input
            class="border rounded px-3 py-2 w-full"
            [(ngModel)]="profile.password"
            name="password"
            type="password"
            required
          />
        </div>
        <div class="flex gap-4 justify-end mt-4 w-full">
          <button
            type="button"
            (click)="goDashboard()"
            class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Về trang chính
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  `,
})
export class ProfileComponent {
  profile = {
    name: 'Admin',
    email: 'admin@school.edu.vn',
    address: 'Hà Nội',
    password: '123456',
  };
  constructor(private router: Router) {}
  goDashboard() {
    this.router.navigate(['/dashboard']);
  }
  onSave() {
    alert('Đã lưu thông tin!');
  }
}
