import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list.component';
import { TeacherAddComponent } from './teacher-add.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TeacherListComponent, canActivate: [authGuard] },
  { path: 'add', component: TeacherAddComponent, canActivate: [authGuard] },
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
