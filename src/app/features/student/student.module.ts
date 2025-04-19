import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentAddComponent } from './student-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StudentListComponent },
  { path: 'add', component: StudentAddComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StudentListComponent,
    StudentAddComponent,
  ],
})
export class StudentModule {}
