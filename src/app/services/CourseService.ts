import { Injectable } from "@angular/core";


@Injectable()

export class CourseService {

  findAllCourses = () =>
    fetch('http://localhost:8080/c').then(response => response.json());

   AddCourse(Course: any) {
     fetch('http://localhost:8080/c/p', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(Course)
    });

    alert("Done!");
  }


   AddModule(course_Id: any, module: any) {
     fetch(`http://localhost:8080/m/p/course/${course_Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(module)
    });

    alert("Done!");
  }


  async AddLesson(module_Id: any, module: any) {
    fetch(`http://localhost:8080/l/p/module/${module_Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(module)
    });

    alert("Done!");
  }
  }

