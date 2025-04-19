import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full flex justify-center">
      <form
        class="w-full max-w-lg bg-white rounded-lg shadow p-8 mt-8 flex flex-col gap-4"
        (ngSubmit)="onSubmit()"
      >
        <h2 class="text-2xl font-bold mb-4">Thêm học sinh</h2>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Họ tên</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="student.name"
            name="name"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Lớp</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="student.class"
            name="class"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Email</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="student.email"
            name="email"
            type="email"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Ngày sinh</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="student.dob"
            name="dob"
            type="date"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Trạng thái</label>
          <select
            class="border rounded px-3 py-2"
            [(ngModel)]="student.status"
            name="status"
            required
          >
            <option value="active">Đang học</option>
            <option value="inactive">Nghỉ</option>
          </select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium">Điểm TB</label>
          <input
            class="border rounded px-3 py-2"
            [(ngModel)]="student.gpa"
            name="gpa"
            type="number"
            min="0"
            max="10"
            step="0.01"
            required
          />
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
export class StudentAddComponent {
  student = {
    name: '',
    class: '',
    email: '',
    dob: '',
    status: 'active',
    gpa: 0,
  };
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/students/list']);
  }
  onSubmit() {
    // Xử lý lưu dữ liệu ở đây (mock)
    alert('Đã lưu học sinh!');
    this.router.navigate(['/students/list']);
  }
}
