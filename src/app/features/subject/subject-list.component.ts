import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Subject {
  id: number;
  name: string;
  code: string;
  teacher: string;
  status: 'active' | 'inactive';
}

function randomSubjectName() {
  const names = [
    'Toán',
    'Văn',
    'Anh',
    'Lý',
    'Hóa',
    'Sinh',
    'Sử',
    'Địa',
    'GDCD',
    'Tin',
  ];
  return names[Math.floor(Math.random() * names.length)];
}
function randomCode() {
  return 'MH' + Math.floor(100 + Math.random() * 900);
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

const subjectsData: Subject[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: randomSubjectName(),
  code: randomCode(),
  teacher: randomTeacher(),
  status: randomStatus(),
}));

const PAGE_SIZE = 10;
const subjectsSignal = signal<Subject[]>(subjectsData);
const pageSignal = signal(1);
const totalPages = Math.ceil(subjectsData.length / PAGE_SIZE);
const pagedSubjects = computed(() => {
  const page = pageSignal();
  const start = (page - 1) * PAGE_SIZE;
  return subjectsSignal().slice(start, start + PAGE_SIZE);
});

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full flex justify-center">
      <div class="w-full max-w-5xl p-4">
        <h1 class="text-2xl font-bold mb-4">Danh sách môn học</h1>
        <div class="overflow-x-auto rounded-lg shadow">
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr class="bg-gray-100 text-gray-700 text-sm">
                <th class="py-2 px-3 border-b">#</th>
                <th class="py-2 px-3 border-b text-left">Tên môn</th>
                <th class="py-2 px-3 border-b text-left">Mã môn</th>
                <th class="py-2 px-3 border-b text-left">Giáo viên</th>
                <th class="py-2 px-3 border-b text-left">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let s of pagedSubjects(); let i = index"
                class="hover:bg-orange-50 transition"
              >
                <td class="py-2 px-3 border-b text-center">
                  {{ (pageSignal() - 1) * PAGE_SIZE + i + 1 }}
                </td>
                <td class="py-2 px-3 border-b">{{ s.name }}</td>
                <td class="py-2 px-3 border-b">{{ s.code }}</td>
                <td class="py-2 px-3 border-b">{{ s.teacher }}</td>
                <td class="py-2 px-3 border-b">
                  <span
                    [ngClass]="
                      s.status === 'active'
                        ? 'text-green-600 font-semibold'
                        : 'text-gray-400'
                    "
                  >
                    {{ s.status === 'active' ? 'Đang dạy' : 'Ngừng' }}
                  </span>
                </td>
              </tr>
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
            [disabled]="pageSignal() === totalPages"
            class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            &gt;
          </button>
          <button
            (click)="pageSignal.set(totalPages)"
            [disabled]="pageSignal() === totalPages"
            class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            »
          </button>
        </div>
      </div>
    </div>
  `,
})
export class SubjectListComponent {
  pagedSubjects = pagedSubjects;
  pageSignal = pageSignal;
  totalPages = totalPages;
  PAGE_SIZE = PAGE_SIZE;

  getPaginationRange(): number[] {
    const current = this.pageSignal();
    const total = this.totalPages;
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
