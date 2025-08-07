import { Component } from '@angular/core';
import { Service } from '../../services/service';
import { Courses } from '../../services/coursesmodel';

@Component({
  selector: 'app-manageusers',
  standalone: false,
  templateUrl: './manageusers.html',
  styleUrl: './manageusers.css'
})
export class Manageusers {
  instructorData:any;
  constructor(private service:Service){}
  ngOnInit(){
    this.service.getAllCourse().subscribe((res)=>{
      this.instructorData=res;
    })
  }
  editInstructor(instructor: any, courseId: string, categoryName: string) {
    const updatedName = prompt('Enter updated instructor name:', instructor.name);
    const updatedDesignation = prompt('Enter updated designation:', instructor.designation);
    const updatedProfile = prompt('Enter new profile image URL:', instructor.profile);

    if (updatedName && updatedDesignation && updatedProfile) {
      const updatedInstructor = {
        ...instructor,
        name: updatedName,
        designation: updatedDesignation,
        profile: updatedProfile
      };


      const category = this.instructorData.find((c:any) => c.categoryName === categoryName);
      const course = category?.courseList.find((c: any) => c.courseId === courseId);

      if (course) {
        const index = course.instructors.findIndex((i: any) => i.name === instructor.name);
        if (index !== -1) {
          course.instructors[index] = updatedInstructor;

          const updatedCourse: Courses = {
            ...course,
            instructors: course.instructors
          };

          const message = this.service.updateCourse(courseId, categoryName, updatedCourse);
          alert(message);
        }
      }
    }
  }
}
