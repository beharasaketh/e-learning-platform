import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Courses } from './coursesmodel';
import { WebdevCourses } from './webdev-courses';
import { Languages } from './Languages';
import { Aicourse } from './AI_Data Science';
import { ProCourses } from './ProCourses';
@Injectable({
  providedIn: 'root'
})
export class Service {
  allcourse: any[] = []
  constructor(private webcourse: WebdevCourses) {
    this.allcourse = [
      {
        categoryName: 'Web Development',
        courseList: new WebdevCourses().webdevcoursesList
      },
      {
        categoryName: 'Programming Languages',
        courseList: new Languages().languagesList
      },
      {
        categoryName: 'AI & Data Science',
        courseList: new Aicourse().aiCoursesList
      },
      {
        categoryName: 'Professional Courses',
        courseList: new ProCourses().proCoursesList
      }
    ];
  }
  getAllCourse() {
    return of(this.allcourse);
  }
  getRandomCourse(): Courses {
    const flatCourses: Courses[] = this.allcourse.flatMap(category => category.courseList);
    const randomIndex = Math.floor(Math.random() * flatCourses.length);
    return flatCourses[randomIndex];
  }
  getCourseById(courseId: string){
    return this.getAllCourse().pipe(
      map((categories: any[]) => {
        for (let category of categories) {
          const found = category.courseList.find((course: any) => course.courseId === courseId);
          if (found) return found;
        }
        return null;
      })
    );
  }
  addProduct(courseobj: Courses, categoryName: any) {
    let courseKeys = Object.keys(courseobj);
    let defaultCourse = new Courses();
    let modelKeys = Object.keys(defaultCourse);

    const category = this.allcourse.find(c => c.categoryName === categoryName);
    if (!category) return 'Category not found';

    if (modelKeys.every(k => courseKeys.includes(k))) {
      category.courseList.push(courseobj);
      return "Product added successfully";
    } else {
      return "Something went wrong. Course model keys don't match.";
    }
  }
  deleteCourse(courseId: string, categoryName: any) {
    const category = this.allcourse.find(c => c.categoryName === categoryName);
    if (!category) return 'Category not found';

    const index = category.courseList.findIndex((course: any) => course.courseId === courseId);
    if (index === -1) return 'Course not found in this category';

    category.courseList.splice(index, 1);
    return 'Course deleted successfully';
  }
  updateCourse(courseId: any, categoryName: any, updatedCourse: Courses){
    const category = this.allcourse.find(c => c.categoryName === categoryName);
    if (!category) return 'Category not found';

    const index = category.courseList.findIndex((course: any) => course.courseId === courseId);
    if (index === -1) return 'Course not found in this category';

    category.courseList[index] = { ...category.courseList[index], ...updatedCourse };
    return 'Course updated successfully';
  }
}
