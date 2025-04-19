import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full flex justify-center">
      <form
        class="w-full max-w-lg bg-white rounded-lg shadow p-8 mt-8 flex flex-col gap-4"
        (ngSubmit)="onSubmit()"
      >
        <h2 class="text-2xl font-bold mb-4">Thêm môn học</h2>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Tên môn</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="subject.name"
            name="name"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Mã môn</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="subject.code"
            name="code"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Giáo viên</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="subject.teacher"
            name="teacher"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Trạng thái</label>
          <select
            class="border rounded px-3 py-2"
            [(ngModel)]="subject.status"
            name="status"
            required
          >
            <option value="active">Đang dạy</option>
            <option value="inactive">Ngừng</option>
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
export class SubjectAddComponent {
  subject = {
    name: '',
    code: '',
    teacher: '',
    status: 'active',
  };
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/subjects/list']);
  }
  onSubmit() {
    // Xử lý lưu dữ liệu ở đây (mock)
    alert('Đã lưu môn học!');
    this.router.navigate(['/subjects/list']);
  }
}
