import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function isEqualToPassword(control: AbstractControl): {'misMatch': boolean} {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  console.log(password.value + " and " + confirmPassword.value)
  return password && confirmPassword && password.value !== confirmPassword.value
    ? { 'misMatch': true }
    : { 'misMatch': false };
}
