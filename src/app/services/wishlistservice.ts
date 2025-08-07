import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Wishlistservice {
  wishlist:any[]=[]
  addToWishlist(cou:any){
    const item = this.wishlist.find((e)=>e.courseId == cou.courseId)
    if(item){
      return "course already existed"
    }
    else{
      this.wishlist.push(cou);
      return " ARE YOU SURE ?"
    }
  } 
  getWishlistItems(){
    return of(this.wishlist)
  }
}
