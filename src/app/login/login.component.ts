import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    account: [
      null,
      [Validators.required, Validators.minLength(6), Validators.maxLength(16)],
    ],
    name: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required],
  });
  ngOnInit(): void {}
  get Account() {
    return this.loginForm.get('account');
  }
}
