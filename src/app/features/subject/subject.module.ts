import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list.component';
import { SubjectAddComponent } from './subject-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SubjectListComponent },
  { path: 'add', component: SubjectAddComponent },
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
