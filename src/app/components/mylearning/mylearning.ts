import { Component } from '@angular/core';
import { Library } from '../../services/library';

@Component({
  selector: 'app-mylearning',
  standalone: false,
  templateUrl: './mylearning.html',
  styleUrl: './mylearning.css'
})
export class Mylearning {
  constructor(private lib:Library){}
  courseItem:any
  ngOnInit(){
    this.lib.getLibraryItems().subscribe((res)=>{this.courseItem=res});
  }
}
