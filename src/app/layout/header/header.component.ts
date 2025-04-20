import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="bg-white h-16 flex items-center justify-between px-8 border-b border-gray-200 shadow-sm"
    >
      <div class="flex items-center gap-4">
        <span class="font-bold text-xl text-blue-600">LMS</span>
        <span class="text-gray-700 text-lg font-semibold">Dashboard</span>
      </div>
      <div class="flex items-center gap-4 relative">
        <button
          class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold focus:outline-none"
          (click)="toggleDropdown($event)"
        >
          A
        </button>
        <div
          *ngIf="dropdownOpen"
          class="absolute right-0 top-12 w-44 bg-white rounded-lg shadow-lg border border-gray-100 z-50 animate-fade-in"
        >
          <button
            class="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
            (click)="goProfile()"
          >
            Trang cá nhân
          </button>
          <button
            class="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg text-red-500"
            (click)="logout()"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      .animate-fade-in {
        animation: fade-in 0.15s;
      }
    `,
  ],
})
export class HeaderComponent {
  dropdownOpen = false;
  constructor(private router: Router, private eRef: ElementRef) {}

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  goProfile() {
    this.dropdownOpen = false;
    this.router.navigate(['/profile']);
  }
  logout() {
    this.dropdownOpen = false;
    this.router.navigate(['/logout']);
  }
}
