import { Component } from '@angular/core';
import { Service } from '../../services/service';
import { Courses } from '../../services/coursesmodel';

@Component({
  selector: 'app-manage-courses',
  standalone: false,
  templateUrl: './manage-courses.html',
  styleUrl: './manage-courses.css'
})
export class ManageCourses {
  viewcourse: any[] = [];

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.service.getAllCourse().subscribe((res) => {
      this.viewcourse = res;
    });
  }

  onDelete(courseId: string, categoryName: string) {
    const result = this.service.deleteCourse(courseId, categoryName);
    alert(result)
  }

  selectedCourse: any = {};
  originalCategoryName: string = '';
  showModal = false;

  openUpdateModal(course: any, categoryName: string) {
    this.selectedCourse = { ...course }; // Clone to avoid mutating
    this.originalCategoryName = categoryName;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCourse = {};
  }

  submitUpdate() {
    const result = this.service.updateCourse(
      this.selectedCourse.courseId,
      this.originalCategoryName,
      this.selectedCourse
    );

    if (result === 'Course updated successfully') {
      alert(result);
      this.closeModal();
      this.refreshCourses(); // Optional: reload the course list
    } else {
      alert('Update failed: ' + result);
    }
  }

  refreshCourses() {
    this.service.getAllCourse().subscribe((res) => {
      this.viewcourse = res;
    });
  }
  isRecentlyAdded(course: any): boolean {
    return course.courseId?.toString().endsWith('1') || course.courseName?.toLowerCase().includes('intro');
  }
  showAddModal = false;
  newCourse: Courses = new Courses();
  newCategoryName: string = '';

  openAddModal(categoryName: string) {
    this.newCourse = new Courses();
    this.newCategoryName = categoryName;
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.newCourse = new Courses();
  }
}
