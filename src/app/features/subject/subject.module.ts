import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list.component';
import { SubjectAddComponent } from './subject-add.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SubjectListComponent, canActivate: [authGuard] },
  { path: 'add', component: SubjectAddComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SubjectListComponent,
    SubjectAddComponent,
  ],
})
export class SubjectModule {}
