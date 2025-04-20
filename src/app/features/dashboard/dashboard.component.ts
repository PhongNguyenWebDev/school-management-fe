import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  class: string;
  gpa: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="bg-white min-h-screen p-8">
      <h1 class="text-3xl font-bold mb-6 text-blue-700">Thống kê tổng quan</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div
          class="bg-blue-100 rounded-xl p-6 flex flex-col items-center shadow"
        >
          <span class="text-4xl font-bold text-blue-700">{{
            studentCount
          }}</span>
          <span class="text-lg text-blue-900 mt-2">Học sinh</span>
        </div>
        <div
          class="bg-green-100 rounded-xl p-6 flex flex-col items-center shadow"
        >
          <span class="text-4xl font-bold text-green-700">{{
            teacherCount
          }}</span>
          <span class="text-lg text-green-900 mt-2">Giáo viên</span>
        </div>
        <div
          class="bg-orange-100 rounded-xl p-6 flex flex-col items-center shadow"
        >
          <span class="text-4xl font-bold text-orange-700">{{
            classCount
          }}</span>
          <span class="text-lg text-orange-900 mt-2">Lớp học</span>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow p-6 overflow-x-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">
          Bảng điểm học sinh
        </h2>
        <table class="min-w-full border border-gray-200 rounded-lg">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-2 px-4 border-b">#</th>
              <th class="py-2 px-4 border-b text-left">Họ tên</th>
              <th class="py-2 px-4 border-b text-left">Lớp</th>
              <th class="py-2 px-4 border-b text-left">Điểm TB</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let s of students; let i = index"
              class="hover:bg-blue-50"
            >
              <td class="py-2 px-4 border-b text-center">{{ i + 1 }}</td>
              <td class="py-2 px-4 border-b">{{ s.name }}</td>
              <td class="py-2 px-4 border-b">{{ s.class }}</td>
              <td class="py-2 px-4 border-b">{{ s.gpa }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  imports: [CommonModule],
})
export class DashboardComponent {
  studentCount = 1200;
  teacherCount = 80;
  classCount = 30;
  students: Student[] = [
    { id: 1, name: 'Nguyễn Văn A', class: '10A1', gpa: 8.5 },
    { id: 2, name: 'Trần Thị B', class: '10A2', gpa: 9.1 },
    { id: 3, name: 'Lê Văn C', class: '10A3', gpa: 7.8 },
    { id: 4, name: 'Phạm Thị D', class: '10A1', gpa: 8.9 },
    { id: 5, name: 'Hoàng Văn E', class: '10A2', gpa: 7.5 },
    { id: 6, name: 'Đỗ Thị F', class: '10A3', gpa: 9.0 },
    { id: 7, name: 'Bùi Văn G', class: '10A1', gpa: 8.2 },
    { id: 8, name: 'Vũ Thị H', class: '10A2', gpa: 8.7 },
    { id: 9, name: 'Đặng Văn I', class: '10A3', gpa: 7.9 },
    { id: 10, name: 'Hồ Thị K', class: '10A1', gpa: 8.8 },
  ];
}
