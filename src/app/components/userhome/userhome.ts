import { Component } from '@angular/core';
import { Service } from '../../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  standalone: false,
  templateUrl: './userhome.html',
  styleUrl: './userhome.css'
})
export class Userhome {
  constructor(private service:Service,private r:Router){}
  username:any;
  viewcourse:any;
  ngOnInit(){
    const data = localStorage.getItem('loggedin');
    if(data){
      const user = JSON.parse(data)
      this.username = user.username
    }
    this.service.getAllCourse().subscribe((res)=>{
      this.viewcourse = res;

    })
  }
  opendetails(pid:any){
    console.log(pid);
    this.r.navigateByUrl(`/user/details/${pid}`)
  }

}
