import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css'
})
export class Loginpage {
  loginForm: FormGroup = new FormGroup({})
  signupform: FormGroup = new FormGroup({})
  constructor(private r: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,Validators.pattern('[a-zA-Z]{5,}')]],
      password: ['', [Validators.required,Validators.minLength(5)]],
    })
    this.signupform = this.fb.group({
      username: ['', [Validators.required,Validators.pattern('[a-zA-Z]{5,}')]],
      email: ['', [Validators.required,Validators.minLength(5)]],
      password: ['', Validators.required],

    });
  }
  reqPwd: any;
  checkLogin() {
    if (this.loginForm.invalid) {
    alert("Please fill all details correctly.");
    return;
  }
    if (this.loginForm.value.username.toLowerCase() == "admin" && this.loginForm.value.password == "12345") {
      this.r.navigateByUrl('/admin/overview')
      alert("login successfull")
    }
    else {
      this.reqPwd = this.loginForm.value.username.slice(0, 3) + "123"
      if (this.loginForm.value.password == this.reqPwd) {
        const userData = {
        username: this.loginForm.value.username,
        pass: this.loginForm.value.password,
        email: this.loginForm.value.email,
        number: '8888888888'  // Add phone number if needed
      };
        localStorage.setItem("loggedin", JSON.stringify(userData))
        this.r.navigateByUrl('/user/home')
      }
    }

    this.loginForm.reset();
  }
  registerUser() {
    this.reqPwd = this.signupform.value.email.slice(0, 3) + "123";
    if (this.signupform.value.password == this.reqPwd) {
      const newUser = {
        username: this.signupform.value.username,
        pass: this.signupform.value.password,
        email: this.signupform.value.email,
        number: '9999999999'
      }
      localStorage.setItem("loggedin", JSON.stringify(newUser))
      this.r.navigateByUrl('/user/home')
    }
    this.signupform.reset();
  }

  issignup: boolean = false;
  toggleform() {
    this.issignup = !this.issignup;
  }



}
