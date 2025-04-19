import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule, ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
})
export class SharedModule {}
