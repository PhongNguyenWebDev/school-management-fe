import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list.component';
import { TeacherAddComponent } from './teacher-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TeacherListComponent },
  { path: 'add', component: TeacherAddComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TeacherListComponent,
    TeacherAddComponent,
  ],
})
export class TeacherModule {}
