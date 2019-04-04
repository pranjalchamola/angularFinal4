import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authService:AuthService,private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
      
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  login_firebase() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.login(this.registerForm.value.email, this.registerForm.value.password)
    .then(value => {
      console.log('Nice, it worked!');
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token',this.registerForm.value.email);
      this.registerForm.value.email = this.registerForm.value.password = ''; 
      this.router.navigate(['/main', 6189]);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
      alert("enter correct credentials");
    });;
    
    
    // console.log(localStorage.getItem('isLoggedIn'));
     
}
logout_firebase()
{
    this.authService.logout();
    this.router.navigate(['/login'])
    
}
}