import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

interface Course {
  id: number;
  name: string;
  code: string;
  teacher: string;
  status: 'active' | 'inactive';
}

function randomCourseName() {
  const names = [
    'Lập trình',
    'Thiết kế',
    'Toán cao cấp',
    'Vật lý đại cương',
    'Hóa học ứng dụng',
    'Tiếng Anh',
    'Kỹ năng mềm',
    'Quản trị dự án',
    'Phân tích dữ liệu',
    'Kinh tế học',
  ];
  return names[Math.floor(Math.random() * names.length)];
}
function randomCode() {
  return 'KH' + Math.floor(100 + Math.random() * 900);
}
function randomTeacher() {
  const names = [
    'Nguyễn Văn A',
    'Trần Thị B',
    'Lê Văn C',
    'Phạm Thị D',
    'Hoàng Văn E',
  ];
  return names[Math.floor(Math.random() * names.length)];
}
function randomStatus() {
  return Math.random() > 0.2 ? 'active' : 'inactive';
}

const coursesData: Course[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: randomCourseName(),
  code: randomCode(),
  teacher: randomTeacher(),
  status: randomStatus(),
}));

const PAGE_SIZE = 10;
const coursesSignal = signal<Course[]>(coursesData);
const pageSignal = signal(1);
const totalPages = Math.ceil(coursesData.length / PAGE_SIZE);
const searchSignal = signal('');
const filteredCourses = computed(() => {
  const q = searchSignal().toLowerCase().trim();
  if (!q) return coursesSignal();
  return coursesSignal().filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.teacher.toLowerCase().includes(q) ||
      c.status.toLowerCase().includes(q)
  );
});
const pagedCourses = computed(() => {
  const page = pageSignal();
  const start = (page - 1) * PAGE_SIZE;
  return filteredCourses().slice(start, start + PAGE_SIZE);
});

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full flex justify-center">
      <div class="w-full p-4">
        <h1 class="text-2xl font-bold mb-4">Danh sách khóa học</h1>
        <div class="mb-4 flex items-center gap-2">
          <input
            [ngModel]="searchSignal()"
            (ngModelChange)="onSearch($event)"
            placeholder="Tìm kiếm theo tên, mã, giáo viên, trạng thái..."
            class="border px-3 py-2 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div class="overflow-x-auto rounded-lg shadow">
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr class="bg-gray-100 text-gray-700 text-sm">
                <th class="py-2 px-3 border-b">#</th>
                <th class="py-2 px-3 border-b text-left">Tên khóa</th>
                <th class="py-2 px-3 border-b text-left">Mã khóa</th>
                <th class="py-2 px-3 border-b text-left">Giáo viên</th>
                <th class="py-2 px-3 border-b text-left">Trạng thái</th>
                <th class="py-2 px-3 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let c of pagedCourses(); let i = index">
                <tr
                  *ngIf="!editId || editId !== c.id"
                  class="hover:bg-orange-50 transition"
                >
                  <td class="py-2 px-3 border-b text-center">
                    {{ (pageSignal() - 1) * PAGE_SIZE + i + 1 }}
                  </td>
                  <td class="py-2 px-3 border-b">{{ c.name }}</td>
                  <td class="py-2 px-3 border-b">{{ c.code }}</td>
                  <td class="py-2 px-3 border-b">{{ c.teacher }}</td>
                  <td class="py-2 px-3 border-b">
                    <span
                      [ngClass]="
                        c.status === 'active'
                          ? 'text-green-600 font-semibold'
                          : 'text-gray-400'
                      "
                    >
                      {{ c.status === 'active' ? 'Đang mở' : 'Đóng' }}
                    </span>
                  </td>
                  <td class="py-2 px-3 border-b text-center">
                    <button
                      (click)="onEdit(c)"
                      class="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-blue-100 mr-1"
                      title="Sửa"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 text-blue-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487a2.1 2.1 0 1 1 2.97 2.97L7.5 19.79l-4 1 1-4 14.362-14.303z"
                        />
                      </svg>
                    </button>
                    <button
                      (click)="onDelete(c)"
                      class="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-red-100"
                      title="Xóa"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 text-red-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="editId === c.id" class="bg-blue-50">
                  <td class="py-2 px-3 border-b text-center">
                    {{ (pageSignal() - 1) * PAGE_SIZE + i + 1 }}
                  </td>
                  <td class="py-2 px-3 border-b">
                    <input
                      [(ngModel)]="editCache.name"
                      class="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td class="py-2 px-3 border-b">
                    <input
                      [(ngModel)]="editCache.code"
                      class="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td class="py-2 px-3 border-b">
                    <input
                      [(ngModel)]="editCache.teacher"
                      class="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td class="py-2 px-3 border-b">
                    <select
                      [(ngModel)]="editCache.status"
                      class="border px-2 py-1 rounded w-full"
                    >
                      <option value="active">Đang mở</option>
                      <option value="inactive">Đóng</option>
                    </select>
                  </td>
                  <td class="py-2 px-3 border-b text-center">
                    <button
                      (click)="onSaveEdit()"
                      class="px-3 py-1 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
                    >
                      Lưu
                    </button>
                    <button
                      (click)="onCancelEdit()"
                      class="ml-2 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              </ng-container>
            </tbody>
          </table>
        </div>
        <!-- Pagination -->
        <div class="flex justify-center items-center gap-2 mt-4 flex-wrap">
          <button
            (click)="pageSignal.set(1)"
            [disabled]="pageSignal() === 1"
            class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            «
          </button>
          <button
            (click)="pageSignal.set(pageSignal() - 1)"
            [disabled]="pageSignal() === 1"
            class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            &lt;
          </button>
          <ng-container *ngFor="let p of getPaginationRange(); let idx = index">
            <button
              (click)="pageSignal.set(p)"
              [class.bg-orange-500]="pageSignal() === p"
              [class.text-white]="pageSignal() === p"
              class="px-3 py-1 rounded border border-gray-300 hover:bg-orange-100"
              [class.font-bold]="pageSignal() === p"
            >
              {{ p }}
            </button>
          </ng-container>
          <button
            (click)="pageSignal.set(pageSignal() + 1)"
            [disabled]="pageSignal() === totalPages()"
            class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            &gt;
          </button>
          <button
            (click)="pageSignal.set(totalPages())"
            [disabled]="pageSignal() === totalPages()"
            class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            »
          </button>
        </div>
      </div>
    </div>
  `,
})
export class CourseListComponent {
  pagedCourses = pagedCourses;
  pageSignal = pageSignal;
  totalPages = computed(() => Math.ceil(filteredCourses().length / PAGE_SIZE));
  PAGE_SIZE = PAGE_SIZE;
  searchSignal = searchSignal;
  editId: number | null = null;
  editCache: any = {};

  onSearch(q: string) {
    searchSignal.set(q);
    pageSignal.set(1);
  }
  onEdit(c: Course) {
    this.editId = c.id;
    this.editCache = { ...c };
  }
  onSaveEdit() {
    const idx = coursesSignal().findIndex((c) => c.id === this.editId);
    if (idx > -1) {
      const updated = [...coursesSignal()];
      updated[idx] = { ...this.editCache };
      coursesSignal.set(updated);
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật thành công!',
        timer: 1200,
        showConfirmButton: false,
      });
    }
    this.editId = null;
    this.editCache = {};
  }
  onCancelEdit() {
    this.editId = null;
    this.editCache = {};
  }
  onDelete(c: Course) {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        coursesSignal.set(coursesSignal().filter((cs) => cs.id !== c.id));
        Swal.fire({
          icon: 'success',
          title: 'Đã xóa thành công!',
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }
  getPaginationRange(): number[] {
    const current = this.pageSignal();
    const total = this.totalPages();
    const max = 5;
    let start = Math.max(1, current - Math.floor(max / 2));
    let end = start + max - 1;
    if (end > total) {
      end = total;
      start = Math.max(1, end - max + 1);
    }
    const range: number[] = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }
}
