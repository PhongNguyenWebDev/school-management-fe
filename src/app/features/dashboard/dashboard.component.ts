import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="bg-white min-h-screen p-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-[#211C37]">Hello Harsh 👋🏻</h1>
        <p class="text-lg text-[#85878D]">Let's learn something new today!</p>
      </div>
      <!-- Main grid -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <!-- Cột trái: Recent enrolled course -->
        <div class="col-span-1 flex flex-col gap-8">
          <div
            class="bg-white border border-[#E4E4E4] shadow-md rounded-lg p-4 flex flex-col gap-4 w-full max-w-xs"
          >
            <div class="flex flex-col gap-2">
              <span class="text-sm font-medium text-[#1C1D1D]"
                >Recent enrolled course</span
              >
              <div class="flex gap-6">
                <div
                  class="bg-[#F3F3F3] border border-[#E5E7EB] rounded-lg p-4 flex flex-col items-center gap-2 w-48"
                >
                  <div
                    class="bg-[#F9F9F9] rounded-lg shadow w-10 h-10 flex items-center justify-center"
                  >
                    <span class="text-xs">􀣷</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <span class="font-semibold text-xs text-[#1C1D1D]"
                      >Product Design Course</span
                    >
                    <div class="flex justify-between items-center w-full">
                      <span class="text-[10px] text-black/80">14/30 class</span>
                      <span class="bg-[#FF4B00] rounded-lg w-4 h-2"></span>
                    </div>
                  </div>
                </div>
                <!-- Có thể thêm nhiều course khác nếu cần -->
              </div>
            </div>
          </div>
          <!-- Resources -->
          <div
            class="bg-white border border-[#E4E4E4] shadow-md rounded-lg p-4 w-full max-w-xs"
          >
            <span class="block text-base font-medium text-[#121212] mb-2"
              >Your Resources</span
            >
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-medium text-[#121212]"
                  >Auto-layout.pdf</span
                >
                <span
                  class="text-[10px] text-[#FF4B00] bg-[#FF4B00]/15 rounded-full px-2"
                  >.PDF</span
                >
                <button class="ml-auto text-xs text-[#FF4B00]">Cancel</button>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-medium text-[#121212]"
                  >Design_Tips.png</span
                >
                <span
                  class="text-[10px] text-[#FF4B00] bg-[#FF4B00]/15 rounded-full px-2"
                  >.png</span
                >
                <button class="ml-auto text-xs text-[#FF4B00]">Download</button>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-medium text-[#121212]"
                  >Basics_Of_UX.fig</span
                >
                <span
                  class="text-[10px] text-[#FF4B00] bg-[#FF4B00]/15 rounded-full px-2"
                  >.fig</span
                >
                <span class="ml-auto text-[10px] text-[#121212]">8.5 MB</span>
                <button class="ml-2 text-xs text-[#FF4B00]">Download</button>
              </div>
              <button
                class="mt-2 text-xs text-[#FF4B00] bg-[#FF4B00]/10 rounded px-2 py-1 w-fit"
              >
                see more
              </button>
            </div>
          </div>
        </div>
        <!-- Cột giữa: Calendar, Performance, Hours Spent -->
        <div class="col-span-1 flex flex-col gap-8">
          <!-- Calendar -->
          <div
            class="bg-white border border-[#E4E4E4] shadow-md rounded-lg p-4 w-full"
          >
            <div class="flex justify-between items-center mb-2">
              <span class="font-semibold text-[#FF4B00]">June 2024</span>
              <div class="flex gap-2">
                <button
                  class="w-6 h-6 flex items-center justify-center rounded-full border border-[#222] text-[#222]"
                >
                  ‹
                </button>
                <button
                  class="w-6 h-6 flex items-center justify-center rounded-full border border-[#222] text-[#222]"
                >
                  ›
                </button>
              </div>
            </div>
            <div class="grid grid-cols-7 gap-1 text-xs text-[#AAAAAA] mb-1">
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span
              ><span>Thu</span><span>Fri</span><span>Sat</span>
            </div>
            <div class="grid grid-cols-7 gap-1 text-xs">
              <span class="text-[#A5AAB5]">30</span
              ><span class="text-[#A5AAB5]">31</span
              ><span class="text-[#222]">1</span
              ><span class="text-[#222]">2</span
              ><span class="text-[#222]">3</span
              ><span class="text-[#222]">4</span
              ><span class="text-[#222]">5</span>
              <span class="text-[#FF0000]">6</span
              ><span class="text-[#222]">7</span
              ><span class="text-[#222]">8</span
              ><span class="text-[#222]">9</span
              ><span class="text-[#222]">10</span
              ><span class="text-white bg-[#FF4B00] rounded-full">11</span
              ><span class="text-[#222]">12</span>
              <!-- ... các ngày khác ... -->
            </div>
          </div>
          <!-- Performance -->
          <div
            class="bg-white border border-[#E2E8F0] shadow-md rounded-lg p-4 w-full"
          >
            <span class="block text-base font-semibold text-[#1C1D1D] mb-2"
              >Performance</span
            >
            <div class="flex items-center gap-4">
              <div
                class="w-20 h-20 rounded-full bg-[#F8EFE2] flex items-center justify-center"
              ></div>
              <div>
                <span class="block text-xs text-[#42404C] font-medium"
                  >Assignment Submission Performance</span
                >
                <span class="block text-xs text-[#83868E]"
                  >Your Grade:
                  <span class="font-bold text-[#1C1D1D]">8.966</span></span
                >
              </div>
              <div class="ml-auto flex items-center gap-2">
                <span class="text-xs text-[#424252]">Monthly</span>
                <button
                  class="w-4 h-4 flex items-center justify-center rounded-full border border-[#82888F] text-[#82888F]"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
          <!-- Hours Spent -->
          <div
            class="bg-white border border-[#E2E8F0] shadow-md rounded-lg p-4 w-full"
          >
            <span class="block text-base font-semibold text-[#1C1D1D] mb-2"
              >Hours Spent</span
            >
            <div class="flex items-center gap-4">
              <div
                class="w-32 h-20 bg-[#EFF1F3] rounded-lg flex items-center justify-center"
              >
                <span class="text-lg font-bold text-[#85878D]">80 Hr</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs text-[#999]"
                  >Study:
                  <span class="font-semibold text-[#FF4B00]">35 Hr</span></span
                >
                <span class="text-xs text-[#999]"
                  >Online Test:
                  <span class="font-semibold text-[#FF4B00]">52 Hr</span></span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Cột phải: To do list, Upcoming Lesson -->
        <div class="col-span-1 flex flex-col gap-8">
          <!-- To do list -->
          <div
            class="bg-white border border-[#E2E8F0] shadow-md rounded-lg p-4 w-full"
          >
            <span class="block text-lg font-semibold text-[#121212] mb-2"
              >To do List</span
            >
            <ul class="flex flex-col gap-2">
              <li class="flex items-center gap-2">
                <span class="text-sm text-[#121212] opacity-70"
                  >Human Interaction Designs</span
                >
                <span class="text-xs text-[#41475E] opacity-50"
                  >Tuesday, 30 June 2024</span
                >
                <span
                  class="ml-auto w-3 h-3 rounded-full bg-[#FF4B00]/10 border border-[#FF4B00]"
                ></span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-sm text-[#121212] opacity-70"
                  >Design system Basics</span
                >
                <span class="text-xs text-[#41475E] opacity-50"
                  >Monday, 24 June 2024</span
                >
                <span
                  class="ml-auto w-3 h-3 rounded-full bg-[#FF4B00]/10 border border-[#FF4B00]"
                ></span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-sm text-[#121212] opacity-70"
                  >Introduction to UI</span
                >
                <span class="text-xs text-[#41475E] opacity-50"
                  >Friday, 10 June 2024</span
                >
                <span class="ml-auto w-3 h-3 rounded-full bg-[#FF4B00]"></span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-sm text-[#121212] opacity-70"
                  >Basics of Figma</span
                >
                <span class="text-xs text-[#41475E] opacity-50"
                  >Friday, 05 June 2024</span
                >
                <span class="ml-auto w-3 h-3 rounded-full bg-[#FF4B00]"></span>
              </li>
            </ul>
          </div>
          <!-- Upcoming Lesson -->
          <div
            class="bg-white border border-[#E2E8F0] shadow-md rounded-lg p-4 w-full"
          >
            <span class="block text-lg font-semibold text-[#1C1D1D] mb-2"
              >Upcoming Lesson</span
            >
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-4 bg-[#F3F3F3] rounded-lg p-4">
                <div
                  class="w-10 h-10 bg-[#FF4B00] rounded-full flex items-center justify-center text-white"
                >
                  🎓
                </div>
                <div class="flex flex-col">
                  <span class="font-medium text-[#1C1D1D]"
                    >UX Design Fundamentals</span
                  >
                  <span class="text-xs text-[#1C1D1D] opacity-80">5:30pm</span>
                </div>
                <button
                  class="ml-auto bg-[#FF4B00] text-white rounded px-3 py-1"
                >
                  Join
                </button>
              </div>
              <div class="flex items-center gap-4 bg-[#F3F3F3] rounded-lg p-4">
                <div
                  class="w-10 h-10 bg-[#FF4B00] rounded-full flex items-center justify-center text-white"
                >
                  ✔️
                </div>
                <div class="flex flex-col">
                  <span class="font-medium text-[#1C1D1D]"
                    >Interaction Design</span
                  >
                  <span class="text-xs text-[#1C1D1D] opacity-80">9:00pm</span>
                </div>
                <button
                  class="ml-auto bg-[#FF4B00]/10 text-[#FF4B00] rounded px-3 py-1"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent {}
