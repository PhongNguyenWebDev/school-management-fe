import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentAddComponent } from './student-add.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StudentListComponent, canActivate: [authGuard] },
  { path: 'add', component: StudentAddComponent, canActivate: [authGuard] },
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
