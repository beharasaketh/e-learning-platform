import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: false,
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.css'
})
export class Admindashboard {
  constructor(private r: Router) { }
  user: any;
  ngOnInit() {
    const userData = localStorage.getItem("loggedin");
    if (userData) {
      const parsed = JSON.parse(userData)

      if (parsed.username !== 'admin') {
        console.log("User Data for Admin View:", parsed);
      }
    }
  }

  logout() {
    const shouldlogout = confirm("Do you want to log out?");
    if (shouldlogout) {
      localStorage.removeItem("loggedin");
      this.r.navigateByUrl('')
    }
    else {

    }

  }
}
