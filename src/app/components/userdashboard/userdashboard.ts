import { Component } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  standalone: false,
  templateUrl: './userdashboard.html',
  styleUrl: './userdashboard.css'
})
export class Userdashboard {
  username:any;
  ngOnInit(){
    const data = localStorage.getItem('loggedin');
    if(data){
      const user = JSON.parse(data)
      this.username = user.username
    }
  }
}
