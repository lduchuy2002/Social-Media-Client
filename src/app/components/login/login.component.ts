import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validationConst from '../../constants/validation.constant.js';
import isEqualToPassword from '../../helpers/isEqualToPassword.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  loginForm: FormGroup;
  ngOnInit(): void {
    const {
      MIN_LEN_ACCOUNT,
      MAX_LEN_ACCOUNT,
      REG_FOR_ACCOUNT,
      MIN_LEN_NAME,
      MAX_LEN_NAME,
      REG_FOR_NAME,
      MIN_LEN_PASSWORD,
      MAX_FOR_PASSWORD,
      REG_FOR_PASSWORD,
    } = validationConst;

    this.loginForm = this.fb.group(
      {
        account: [
          null,
          [
            Validators.required,
            Validators.minLength(MIN_LEN_ACCOUNT),
            Validators.maxLength(MAX_LEN_ACCOUNT),
            Validators.pattern(REG_FOR_ACCOUNT),
          ],
        ],
        name: [
          null,
          [
            Validators.required,
            Validators.minLength(MIN_LEN_NAME),
            Validators.maxLength(MAX_LEN_NAME),
            Validators.pattern(REG_FOR_NAME),
          ],
        ],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(MIN_LEN_PASSWORD),
            Validators.maxLength(MAX_FOR_PASSWORD),
            Validators.pattern(REG_FOR_PASSWORD),
          ],
        ],
        confirmPassword: [null, [Validators.required]],
      },
      {
        validator: isEqualToPassword
      }
      
    );
    
  }
  get Account() {
    return this.loginForm.get('account');
  }
  get Name() {
    return this.loginForm.get('name');
  }
  get Email() {
    return this.loginForm.get('email');
  }
  get Password() {
    return this.loginForm.get('password');
  }
  get ConfirmPassword() {
    return this.loginForm.get('confirmPassword');
  }
}
