import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="w-full">
      <label
        *ngIf="label"
        [for]="id"
        class="block text-sm font-medium text-gray-700 mb-1"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>
      <input
        [id]="id"
        [type]="type"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [class]="getInputClasses()"
        [placeholder]="placeholder"
        [disabled]="disabled"
      />
      <p *ngIf="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    </div>
  `,
})
export class InputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() error?: string;
  @Input() id = `input-${Math.random().toString(36).substr(2, 9)}`;

  value = '';
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  getInputClasses(): string {
    const baseClasses =
      'block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
    const stateClasses = this.error
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
    const disabledClasses = this.disabled
      ? 'bg-gray-100 cursor-not-allowed'
      : '';

    return `${baseClasses} ${stateClasses} ${disabledClasses}`;
  }
}
