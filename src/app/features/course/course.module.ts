import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseAddComponent } from './course-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CourseListComponent },
  { path: 'add', component: CourseAddComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CourseListComponent,
    CourseAddComponent,
  ],
})
export class CourseModule {}
