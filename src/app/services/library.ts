import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Library {
  library: any[] = []
  addToLibrary(cou: any) {
    const item = this.library.find((e) => e.courseId == cou.courseId);
    if (item) {
      return "Course Already existed"
    }
    else {
      this.library.push(cou);
      return "Are you sure ?"
    }
  }
  getLibraryCount() {
    return this.library.length
  }
  getLibraryItems() {
    return of(this.library)
  }
}