import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private authService:AuthService,private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]],
          lastName: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
   
  onSubmit() {
    this.authService.signup(this.registerForm.value.email, this.registerForm.value.password);
    this.registerForm.value.email = this.registerForm.value.password = '';
}
}
