import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactStore } from '../contact-store';

function containsAt(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value ?? '';
  return value === '' || value.includes('@') ? null : { missingAt: true };
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);
  private readonly store = inject(ContactStore);

  readonly form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: this.fb.control<number | null>(null, Validators.min(0)),
    hide: false,
    email: ['', [Validators.required, containsAt]],
    comment: ['', Validators.required],
  });

  constructor() {
    this.form.controls.hide.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((hidden) => {
        const email = this.form.controls.email;
        if (hidden) {
          email.reset('');
          email.disable();
        } else {
          email.enable();
        }
      });
  }

  get hidden(): boolean {
    return this.form.controls.hide.value;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const { firstName, lastName, age, email, comment } = this.form.getRawValue();
    this.store.save({ firstName, lastName, age, email, comment });
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }
}
