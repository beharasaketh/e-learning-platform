import { Component } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class Overview {
  allCourses: any[] = [];

  constructor(private service: Service) { }

  totalCourses = 0;
  totalInstructors = 0;
  totalPrice = 0;
  averageDuration = 0;
  username:any
  ngOnInit() {
    const data = localStorage.getItem('loggedin');
    if(data){
      const user = JSON.parse(data)
      this.username = user.username
    }
    this.service.getAllCourse().subscribe((res) => {
      this.allCourses = res;

      let priceSum = 0;
      let durationSum = 0;
      let courseCount = 0;
      
      for (let category of this.allCourses) {
        for (let course of category.courseList) {
          courseCount++;
          const numericPrice = parseInt(course.coursePrice.replace(/[₹,]/g, '')) || 0;
          priceSum += numericPrice;

          const match = course.courseDuration.match(/\d+/);
          const durationInDays = match ? parseInt(match[0]) * 7 : 0;
          durationSum += durationInDays;

        }
      }

      this.totalCourses = courseCount;
      this.totalPrice = priceSum;
      this.averageDuration = Math.round(durationSum / courseCount);
    });
  }


}
