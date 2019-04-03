import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  login_firebase() {
    this.authService.login(this.registerForm.value.email, this.registerForm.value.password);
    this.registerForm.value.email = this.registerForm.value.password = '';

  }
  logout_firebase() {
    this.authService.logout();
  }
}