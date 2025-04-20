import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

interface Class {
  id: number;
  name: string;
  teacher: string;
  size: number;
  status: 'active' | 'inactive';
}

function randomClassName() {
  return `Lớp 10${String.fromCharCode(65 + Math.floor(Math.random() * 5))}`;
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
function randomSize() {
  return Math.floor(Math.random() * 20) + 30;
}
function randomStatus() {
  return Math.random() > 0.2 ? 'active' : 'inactive';
}

const classesData: Class[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: randomClassName(),
  teacher: randomTeacher(),
  size: randomSize(),
  status: randomStatus(),
}));

const PAGE_SIZE = 10;
const classesSignal = signal<Class[]>(classesData);
const pageSignal = signal(1);
const totalPages = Math.ceil(classesData.length / PAGE_SIZE);
const searchSignal = signal('');
const filteredClasses = computed(() => {
  const q = searchSignal().toLowerCase().trim();
  if (!q) return classesSignal();
  return classesSignal().filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.teacher.toLowerCase().includes(q) ||
      c.size.toString().includes(q) ||
      c.status.toLowerCase().includes(q)
  );
});
const pagedClasses = computed(() => {
  const page = pageSignal();
  const start = (page - 1) * PAGE_SIZE;
  return filteredClasses().slice(start, start + PAGE_SIZE);
});

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full flex justify-center">
      <div class="w-full p-4">
        <h1 class="text-2xl font-bold mb-4">Danh sách lớp học</h1>
        <div class="mb-4 flex items-center gap-2">
          <input
            [ngModel]="searchSignal()"
            (ngModelChange)="onSearch($event)"
            placeholder="Tìm kiếm theo tên lớp, giáo viên, sĩ số, trạng thái..."
            class="border px-3 py-2 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div class="overflow-x-auto rounded-lg shadow">
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr class="bg-gray-100 text-gray-700 text-sm">
                <th class="py-2 px-3 border-b">#</th>
                <th class="py-2 px-3 border-b text-left">Tên lớp</th>
                <th class="py-2 px-3 border-b text-left">Giáo viên CN</th>
                <th class="py-2 px-3 border-b text-left">Sĩ số</th>
                <th class="py-2 px-3 border-b text-left">Trạng thái</th>
                <th class="py-2 px-3 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let c of pagedClasses(); let i = index">
                <tr
                  *ngIf="!editId || editId !== c.id"
                  class="hover:bg-orange-50 transition"
                >
                  <td class="py-2 px-3 border-b text-center">
                    {{ (pageSignal() - 1) * PAGE_SIZE + i + 1 }}
                  </td>
                  <td class="py-2 px-3 border-b">{{ c.name }}</td>
                  <td class="py-2 px-3 border-b">{{ c.teacher }}</td>
                  <td class="py-2 px-3 border-b">{{ c.size }}</td>
                  <td class="py-2 px-3 border-b">
                    <span
                      [ngClass]="
                        c.status === 'active'
                          ? 'text-green-600 font-semibold'
                          : 'text-gray-400'
                      "
                    >
                      {{ c.status === 'active' ? 'Đang hoạt động' : 'Ngừng' }}
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
                      [(ngModel)]="editCache.teacher"
                      class="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td class="py-2 px-3 border-b">
                    <input
                      [(ngModel)]="editCache.size"
                      type="number"
                      class="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td class="py-2 px-3 border-b">
                    <select
                      [(ngModel)]="editCache.status"
                      class="border px-2 py-1 rounded w-full"
                    >
                      <option value="active">Đang hoạt động</option>
                      <option value="inactive">Ngừng</option>
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
export class ClassListComponent {
  pagedClasses = pagedClasses;
  pageSignal = pageSignal;
  totalPages = computed(() => Math.ceil(filteredClasses().length / PAGE_SIZE));
  PAGE_SIZE = PAGE_SIZE;
  searchSignal = searchSignal;
  editId: number | null = null;
  editCache: any = {};

  onSearch(q: string) {
    searchSignal.set(q);
    pageSignal.set(1);
  }
  onEdit(c: Class) {
    this.editId = c.id;
    this.editCache = { ...c };
  }
  onSaveEdit() {
    const idx = classesSignal().findIndex((cl) => cl.id === this.editId);
    if (idx > -1) {
      const updated = [...classesSignal()];
      updated[idx] = { ...this.editCache };
      classesSignal.set(updated);
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
  onDelete(c: Class) {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        classesSignal.set(classesSignal().filter((cl) => cl.id !== c.id));
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
