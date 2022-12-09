import { Component, OnInit } from '@angular/core';
import { CourseService } from "../services/CourseService";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})


export class CourseNavigatorComponent implements OnInit {
  
  courses : any[] | undefined; 
  
  

  

  OnSubmit(data: any){
    this.http.post('http://localhost:8080/api/v1/courses', data).
    subscribe((result)=>{
console.warn("result",result)

    })
    console.warn(data);

  }
  

  
  selectedCourse= { 
    module: [] as any[],
    id: undefined
  }



  
  selectedModules= { 
    lesson: [] as any[],
    id: undefined
  }



  selectedLesson= { 
   
    id: undefined
  }


  


  constructor(private CourseService : CourseService, private router:Router, private http:HttpClient ) { }
  

  ngOnInit(): void {
    

  this.CourseService.findAllCourses().
  then(courses => this.courses = courses);


  }



  
  selectCourse(course: any) {
    this.selectedCourse = course;
  }
  


  
  selectModule(module: any){
    this.selectedModules = module;
    
      }

      SelectLesson(lesson:any){
this.selectedLesson = lesson;

      }



  
   
   




}
