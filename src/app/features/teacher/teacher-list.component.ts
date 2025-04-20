import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface Teacher {
  id: number;
  name: string;
  email: string;
  subject: string;
  status: 'active' | 'inactive';
}

function randomTeacherName() {
  const first = [
    'Nguyễn',
    'Trần',
    'Lê',
    'Phạm',
    'Hoàng',
    'Vũ',
    'Đặng',
    'Bùi',
    'Đỗ',
    'Hồ',
  ];
  const last = [
    'Anh',
    'Bình',
    'Châu',
    'Dương',
    'Giang',
    'Hà',
    'Hải',
    'Hùng',
    'Khánh',
    'Linh',
    'Minh',
    'Nam',
    'Phúc',
    'Quang',
    'Sơn',
    'Thảo',
    'Trang',
    'Tuấn',
    'Việt',
    'Yến',
  ];
  return `${first[Math.floor(Math.random() * first.length)]} ${
    last[Math.floor(Math.random() * last.length)]
  }`;
}
function randomEmail(name: string) {
  return name.toLowerCase().replace(/ /g, '.') + '@school.edu.vn';
}
function randomSubject() {
  const subjects = [
    'Toán',
    'Văn',
    'Anh',
    'Lý',
    'Hóa',
    'Sinh',
    'Sử',
    'Địa',
    'GDCD',
  ];
  return subjects[Math.floor(Math.random() * subjects.length)];
}
function randomStatus() {
  return Math.random() > 0.2 ? 'active' : 'inactive';
}

const teachersData: Teacher[] = Array.from({ length: 1000 }, (_, i) => {
  const name = randomTeacherName();
  return {
    id: i + 1,
    name,
    email: randomEmail(name),
    subject: randomSubject(),
    status: randomStatus(),
  };
});

const PAGE_SIZE = 10;
const teachersSignal = signal<Teacher[]>(teachersData);
const pageSignal = signal(1);
const totalPages = Math.ceil(teachersData.length / PAGE_SIZE);
const searchSignal = signal('');
const filteredTeachers = computed(() => {
  const q = searchSignal().toLowerCase().trim();
  if (!q) return teachersSignal();
  return teachersSignal().filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.email.toLowerCase().includes(q) ||
      t.subject.toLowerCase().includes(q) ||
      t.status.toLowerCase().includes(q)
  );
});
const pagedTeachers = computed(() => {
  const page = pageSignal();
  const start = (page - 1) * PAGE_SIZE;
  return filteredTeachers().slice(start, start + PAGE_SIZE);
});

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full flex justify-center">
      <div class="w-full p-4">
        <h1 class="text-2xl font-bold mb-4">Danh sách giáo viên</h1>
        <div class="mb-4 flex items-center gap-2">
          <input
            [ngModel]="searchSignal()"
            (ngModelChange)="onSearch($event)"
            placeholder="Tìm kiếm theo tên, email, môn dạy, trạng thái..."
            class="border px-3 py-2 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div class="overflow-x-auto rounded-lg shadow">
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr class="bg-gray-100 text-gray-700 text-sm">
                <th class="py-2 px-3 border-b">#</th>
                <th class="py-2 px-3 border-b text-left">Họ tên</th>
                <th class="py-2 px-3 border-b text-left">Email</th>
                <th class="py-2 px-3 border-b text-left">Môn dạy</th>
                <th class="py-2 px-3 border-b text-left">Trạng thái</th>
                <th class="py-2 px-3 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let t of pagedTeachers(); let i = index">
                <tr
                  *ngIf="!editId || editId !== t.id"
                  class="hover:bg-orange-50 transition"
                >
                  <td class="py-2 px-3 border-b text-center">
                    {{ (pageSignal() - 1) * PAGE_SIZE + i + 1 }}
                  </td>
                  <td class="py-2 px-3 border-b">{{ t.name }}</td>
                  <td class="py-2 px-3 border-b">{{ t.email }}</td>
                  <td class="py-2 px-3 border-b">{{ t.subject }}</td>
                  <td class="py-2 px-3 border-b">
                    <span
                      [ngClass]="
                        t.status === 'active'
                          ? 'text-green-600 font-semibold'
                          : 'text-gray-400'
                      "
                    >
                      {{ t.status === 'active' ? 'Đang dạy' : 'Nghỉ' }}
                    </span>
                  </td>
                  <td class="py-2 px-3 border-b text-center">
                    <button
                      (click)="onEdit(t)"
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
                      (click)="onDelete(t)"
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
                <tr *ngIf="editId === t.id" class="bg-blue-50">
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
                      [(ngModel)]="editCache.email"
                      class="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td class="py-2 px-3 border-b">
                    <input
                      [(ngModel)]="editCache.subject"
                      class="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td class="py-2 px-3 border-b">
                    <select
                      [(ngModel)]="editCache.status"
                      class="border px-2 py-1 rounded w-full"
                    >
                      <option value="active">Đang dạy</option>
                      <option value="inactive">Nghỉ</option>
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
export class TeacherListComponent {
  pagedTeachers = pagedTeachers;
  pageSignal = pageSignal;
  totalPages = computed(() => Math.ceil(filteredTeachers().length / PAGE_SIZE));
  PAGE_SIZE = PAGE_SIZE;
  searchSignal = searchSignal;
  editId: number | null = null;
  editCache: any = {};

  onSearch(q: string) {
    searchSignal.set(q);
    pageSignal.set(1);
  }
  onEdit(t: Teacher) {
    this.editId = t.id;
    this.editCache = { ...t };
  }
  onSaveEdit() {
    const idx = teachersSignal().findIndex((t) => t.id === this.editId);
    if (idx > -1) {
      const updated = [...teachersSignal()];
      updated[idx] = { ...this.editCache };
      teachersSignal.set(updated);
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
  onDelete(t: Teacher) {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        teachersSignal.set(teachersSignal().filter((tc) => tc.id !== t.id));
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
