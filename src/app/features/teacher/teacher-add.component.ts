import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full flex justify-center">
      <form
        class="w-full max-w-lg bg-white rounded-lg shadow p-8 mt-8 flex flex-col gap-4"
        (ngSubmit)="onSubmit()"
      >
        <h2 class="text-2xl font-bold mb-4">Thêm giáo viên</h2>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Tên giáo viên</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="teacher.name"
            name="name"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Email</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="teacher.email"
            name="email"
            type="email"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Môn dạy</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="teacher.subject"
            name="subject"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Trạng thái</label>
          <select
            class="border rounded px-3 py-2"
            [(ngModel)]="teacher.status"
            name="status"
            required
          >
            <option value="active">Đang dạy</option>
            <option value="inactive">Nghỉ</option>
          </select>
        </div>
        <div class="flex gap-4 justify-end mt-4">
          <button
            type="button"
            (click)="cancel()"
            class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Hủy
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  `,
})
export class TeacherAddComponent {
  teacher = {
    name: '',
    email: '',
    subject: '',
    status: 'active',
  };
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/teachers/list']);
  }
  onSubmit() {
    // Xử lý lưu dữ liệu ở đây (mock)
    alert('Đã lưu giáo viên!');
    this.router.navigate(['/teachers/list']);
  }
}
