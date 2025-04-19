import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  class: string;
  email: string;
  status: 'active' | 'inactive';
  dob: string;
  gpa: number;
}

function randomName() {
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
    'An',
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
function randomClass() {
  return `10${String.fromCharCode(65 + Math.floor(Math.random() * 5))}`;
}
function randomEmail(name: string) {
  return name.toLowerCase().replace(/ /g, '.') + '@school.edu.vn';
}
function randomStatus() {
  return Math.random() > 0.2 ? 'active' : 'inactive';
}
function randomDate() {
  const start = new Date(2005, 0, 1).getTime();
  const end = new Date(2010, 11, 31).getTime();
  const d = new Date(start + Math.random() * (end - start));
  return d.toLocaleDateString('vi-VN');
}
function randomGPA() {
  return +(Math.random() * 4 + 6).toFixed(2);
}

const studentsData: Student[] = Array.from({ length: 1000 }, (_, i) => {
  const name = randomName();
  return {
    id: i + 1,
    name,
    class: randomClass(),
    email: randomEmail(name),
    status: randomStatus(),
    dob: randomDate(),
    gpa: randomGPA(),
  };
});

const PAGE_SIZE = 10;
const studentsSignal = signal<Student[]>(studentsData);
const pageSignal = signal(1);
const totalPages = Math.ceil(studentsData.length / PAGE_SIZE);
const pagedStudents = computed(() => {
  const page = pageSignal();
  const start = (page - 1) * PAGE_SIZE;
  return studentsSignal().slice(start, start + PAGE_SIZE);
});

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full flex justify-center">
      <div class="w-full max-w-5xl p-4">
        <h1 class="text-2xl font-bold mb-4">Danh sách học sinh</h1>
        <div class="overflow-x-auto rounded-lg shadow">
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr class="bg-gray-100 text-gray-700 text-sm">
                <th class="py-2 px-3 border-b">#</th>
                <th class="py-2 px-3 border-b text-left">Họ tên</th>
                <th class="py-2 px-3 border-b text-left">Lớp</th>
                <th class="py-2 px-3 border-b text-left">Email</th>
                <th class="py-2 px-3 border-b text-left">Ngày sinh</th>
                <th class="py-2 px-3 border-b text-left">Điểm TB</th>
                <th class="py-2 px-3 border-b text-left">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let s of pagedStudents(); let i = index"
                class="hover:bg-orange-50 transition"
              >
                <td class="py-2 px-3 border-b text-center">
                  {{ (pageSignal() - 1) * PAGE_SIZE + i + 1 }}
                </td>
                <td class="py-2 px-3 border-b">{{ s.name }}</td>
                <td class="py-2 px-3 border-b">{{ s.class }}</td>
                <td class="py-2 px-3 border-b">{{ s.email }}</td>
                <td class="py-2 px-3 border-b">{{ s.dob }}</td>
                <td class="py-2 px-3 border-b">{{ s.gpa }}</td>
                <td class="py-2 px-3 border-b">
                  <span
                    [ngClass]="
                      s.status === 'active'
                        ? 'text-green-600 font-semibold'
                        : 'text-gray-400'
                    "
                  >
                    {{ s.status === 'active' ? 'Đang học' : 'Nghỉ' }}
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
export class StudentListComponent {
  pagedStudents = pagedStudents;
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
