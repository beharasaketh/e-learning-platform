import { Component } from '@angular/core';
import { Service } from '../../services/service';
import { ActivatedRoute } from '@angular/router';
import { Library } from '../../services/library';
import { Wishlistservice } from '../../services/wishlistservice';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
@Component({
  selector: 'app-coursedetails',
  standalone: false,
  templateUrl: './coursedetails.html',
  styleUrl: './coursedetails.css'
})
export class Coursedetails {
  viewcourse: any; pid: any; course: any; obj: any; result: any;
  constructor(private service: Service, private bs: ActivatedRoute, private lib: Library, private wish: Wishlistservice) { }
  ngOnInit() {
    this.pid = this.bs.snapshot.paramMap.get("id");
    this.service.getAllCourse().subscribe((res) => {
      this.viewcourse = res;
      this.service.getCourseById(this.pid).subscribe((res) => {
        this.course = res;
        this.obj = res;
      })
    })
  }
  addlibrary() {
    const message = this.lib.addToLibrary(this.obj);

    if (window.confirm(message)) {
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#5B8FF9', '#5AD8A6', '#FFC53D', '#FF6B72']
      });

      Swal.fire({
        title: '🎉 Enrolled Successfully!',
        text: 'You are now part of the course.',
        icon: 'success',
        customClass: {
          popup: 'enroll-popup', // ✅ Use your CSS class here
          title: 'swal-title-bold', // ✅ Custom title styling
          confirmButton: 'swal-button-rounded'
        },
        confirmButtonText: 'Awesome!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }
  }
  addWishlist() {
    this.result = this.wish.addToWishlist(this.obj)
    confirm(this.result)
  }
}
