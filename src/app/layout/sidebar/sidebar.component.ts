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
              class="block px-6 py-2 rounded hover:bg-gray-700"
              >Dashboard</a
            >
          </li>
          <li>
            <div
              (click)="studentDropdown.set(!studentDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span>Học sinh</span>
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
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  (click)="$event.stopPropagation()"
                  >Thêm học sinh</a
                >
              </li>
              <li>
                <a
                  routerLink="/students/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  (click)="$event.stopPropagation()"
                  >Danh sách học sinh</a
                >
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="classDropdown.set(!classDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span>Lớp học</span>
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
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Thêm lớp học</a
                >
              </li>
              <li>
                <a
                  routerLink="/classes/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Danh sách lớp học</a
                >
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="teacherDropdown.set(!teacherDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span>Giáo viên</span>
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
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Thêm giáo viên</a
                >
              </li>
              <li>
                <a
                  routerLink="/teachers/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Danh sách giáo viên</a
                >
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="subjectDropdown.set(!subjectDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span>Môn học</span>
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
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Thêm môn học</a
                >
              </li>
              <li>
                <a
                  routerLink="/subjects/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Danh sách môn học</a
                >
              </li>
            </ul>
          </li>
          <li>
            <div
              (click)="courseDropdown.set(!courseDropdown())"
              class="flex items-center justify-between px-6 py-2 rounded hover:bg-gray-700 cursor-pointer select-none"
            >
              <span>Khóa học</span>
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
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Thêm khóa học</a
                >
              </li>
              <li>
                <a
                  routerLink="/courses/list"
                  routerLinkActive="bg-gray-700"
                  class="block px-4 py-2 rounded hover:bg-gray-700"
                  >Danh sách khóa học</a
                >
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
