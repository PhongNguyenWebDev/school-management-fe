import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header
      class="bg-white h-16 flex items-center justify-between px-8 border-b border-gray-200 shadow-sm"
    >
      <div class="flex items-center gap-4">
        <span class="font-bold text-xl text-blue-600">LMS</span>
        <span class="text-gray-700 text-lg font-semibold">Dashboard</span>
      </div>
      <div class="flex items-center gap-4">
        <span
          class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold"
          >A</span
        >
      </div>
    </header>
  `,
})
export class HeaderComponent {}
