import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <aside class="bg-gray-800 text-white h-full w-64 flex flex-col">
      <div
        class="h-16 flex items-center justify-center font-bold text-xl border-b border-gray-700"
      >
        LMS
      </div>
      <nav class="flex-1 py-4">
        <ul class="space-y-2">
          <li>
            <a
              routerLink="/dashboard"
              routerLinkActive="bg-gray-700"
              class="block px-6 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-blue-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <div
              (click)="studentDropdown.set(!studentDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-green-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
                Học sinh
              </span>
              <svg
                class="w-4 h-4 ml-2 transition-transform"
                [ngClass]="studentDropdown() ? 'rotate-90' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <ul *ngIf="studentDropdown()" class="ml-4 mt-1 space-y-1">
              <li>
                <a
                  routerLink="/students/add"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                  (click)="$event.stopPropagation()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-green-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Thêm học sinh
                </a>
              </li>
              <li>
                <a
                  routerLink="/students/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                  (click)="$event.stopPropagation()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-green-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  Danh sách học sinh
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="classDropdown.set(!classDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-purple-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                Lớp học
              </span>
              <svg
                class="w-4 h-4 ml-2 transition-transform"
                [ngClass]="classDropdown() ? 'rotate-90' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <ul *ngIf="classDropdown()" class="ml-4 mt-1 space-y-1">
              <li>
                <a
                  routerLink="/classes/add"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-purple-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Thêm lớp học
                </a>
              </li>
              <li>
                <a
                  routerLink="/classes/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-purple-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  Danh sách lớp học
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="teacherDropdown.set(!teacherDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-orange-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
                Giáo viên
              </span>
              <svg
                class="w-4 h-4 ml-2 transition-transform"
                [ngClass]="teacherDropdown() ? 'rotate-90' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <ul *ngIf="teacherDropdown()" class="ml-4 mt-1 space-y-1">
              <li>
                <a
                  routerLink="/teachers/add"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-orange-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Thêm giáo viên
                </a>
              </li>
              <li>
                <a
                  routerLink="/teachers/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-orange-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  Danh sách giáo viên
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="subjectDropdown.set(!subjectDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-pink-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
                Môn học
              </span>
              <svg
                class="w-4 h-4 ml-2 transition-transform"
                [ngClass]="subjectDropdown() ? 'rotate-90' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <ul *ngIf="subjectDropdown()" class="ml-4 mt-1 space-y-1">
              <li>
                <a
                  routerLink="/subjects/add"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-pink-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Thêm môn học
                </a>
              </li>
              <li>
                <a
                  routerLink="/subjects/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-pink-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  Danh sách môn học
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="courseDropdown.set(!courseDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-yellow-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
                Khóa học
              </span>
              <svg
                class="w-4 h-4 ml-2 transition-transform"
                [ngClass]="courseDropdown() ? 'rotate-90' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <ul *ngIf="courseDropdown()" class="ml-4 mt-1 space-y-1">
              <li>
                <a
                  routerLink="/courses/add"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-yellow-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Thêm khóa học
                </a>
              </li>
              <li>
                <a
                  routerLink="/courses/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-yellow-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  Danh sách khóa học
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  `,
})
export class SidebarComponent {
  studentDropdown = signal(false);
  classDropdown = signal(false);
  teacherDropdown = signal(false);
  subjectDropdown = signal(false);
  courseDropdown = signal(false);
}
