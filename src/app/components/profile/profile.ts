import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  constructor(private r: Router) { }
  userDetails: any = {
    user: '',
    username: '', pass: '', number: '', email: ''
  }
  ngOnInit() {
    const data = localStorage.getItem('loggedin');
    if (data) {
      const userr = JSON.parse(data)
      this.userDetails.username = userr.username
      this.userDetails.pass = userr.pass
      this.userDetails.email = userr.username+"@gmail.com"
      this.userDetails.number = userr.number
    }
  }

  logout() {
    const shouldlogout = confirm("Do you want to log out?");
    if (shouldlogout) {
      this.r.navigateByUrl('')
    }
    else {

    }

  }
  profileUpdated(form:any) {
    localStorage.setItem('loggedin', JSON.stringify(this.userDetails));
    alert("Profile updated")
    this.r.navigateByUrl('/user/home')
  }
}
