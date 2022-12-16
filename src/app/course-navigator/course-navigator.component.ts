import { Component, OnInit } from '@angular/core';
import { CourseService } from "../services/CourseService";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Modal } from 'bootstrap';




@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})


export class CourseNavigatorComponent implements OnInit {

  courses: any ;
  titleC: any;
  titleL:any;
  titleM: any;
  author: any;

selectedCourse = { 
  modules:[] as any[],
  id:undefined
}

selectedModules = {
  lessons:[] as any[],
  id:undefined
}

selectedLesson = {

id:undefined}
  openform: boolean | undefined;

  constructor(private CourseService : CourseService
    ,private router: Router ) { }


  ngOnInit(): void {
    this.CourseService.findAllCourses().then(courses => this.courses = courses);
    const element = document.getElementById('myModal') as HTMLElement;
    const myModal = new Modal(element);
    myModal.show();
  
  }
  
  selectCourse(course: any) { 
     this.selectedCourse = course;}
  selectModule(module: any){
     this.selectedModules = module;}
  selectLesson(lesson:any){
     this.selectedLesson = lesson;
  }




  addCourse(title: string, author: string) {
    const addCourse = {title,author}
    this.CourseService.AddCourse(addCourse);
    }
    


  addModule(name:string){
    const addmodule = {name}
    this.CourseService.AddModule(this.selectedCourse.id,addmodule);
  }
  
  
  addLesson(title:string){
    const newLesson = {title}
    this.CourseService.AddLesson(this.selectedModules.id,newLesson);
  }

}