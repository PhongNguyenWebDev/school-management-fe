import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassListComponent } from './class-list.component';
import { ClassAddComponent } from './class-add.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ClassListComponent, canActivate: [authGuard] },
  { path: 'add', component: ClassAddComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClassListComponent,
    ClassAddComponent,
  ],
})
export class ClassModule {}
