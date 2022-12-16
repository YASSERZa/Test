import { Injectable } from "@angular/core";


@Injectable()

export class CourseService {

  findAllCourses = () =>
    fetch('http://newtest1.eba-ajaqzjma.us-east-1.elasticbeanstalk.com/m/p/course/c').then(response => response.json());

   AddCourse(Course: any) {
     fetch('http://newtest1.eba-ajaqzjma.us-east-1.elasticbeanstalk.com/m/p/course/c/p', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(Course)
    });

    alert("Done!");
  }


   AddModule(course_Id: any, module: any) {
     fetch(`http://newtest1.eba-ajaqzjma.us-east-1.elasticbeanstalk.com/m/p/course/${course_Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(module)
    });

    alert("Done!");
  }


  async AddLesson(module_Id: any, module: any) {
    fetch(`http://newtest1.eba-ajaqzjma.us-east-1.elasticbeanstalk.com/m/p/course/l/p/module/${module_Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(module)
    });

    alert("Done!");
  }
  }

