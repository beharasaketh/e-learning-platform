import { Component } from '@angular/core';
import { Wishlistservice } from '../../services/wishlistservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {
  constructor(private wistl: Wishlistservice,private r: Router) { }
  courseitem: any;
  ngOnInit() {
    this.wistl.getWishlistItems().subscribe((res) => {this.courseitem = res})
  }
  opendetails(pid:any){
    console.log(pid);
    this.r.navigateByUrl(`/user/details/${pid}`)
  }
}
