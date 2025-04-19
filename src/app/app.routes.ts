import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./features/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./features/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./features/class/class.module').then((m) => m.ClassModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./features/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'subjects',
    loadChildren: () =>
      import('./features/subject/subject.module').then((m) => m.SubjectModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
