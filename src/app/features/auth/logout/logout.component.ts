import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"
  >
    <div
      class="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6 items-center"
    >
      <span class="text-xl text-gray-700">Đang đăng xuất...</span>
    </div>
  </div>`,
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit() {
    this.auth.logout();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
