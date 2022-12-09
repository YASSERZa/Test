import { Component, Injectable, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserServiceClint } from '../services/user.service.clint';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




export class RegisterComponent implements OnInit {
  username: any;
  password: any;
  _id: any;
  infoMessage = '';
  userId: any;
  
  constructor(private router: Router, private UserServiceClint: UserServiceClint,
    private activatedRoute: ActivatedRoute) { }
    
  


 
  ngOnInit():
        void {
          
        

          }

   


  
  register(_id:number, username: string, password: string) {
    
      


       console.log(_id,username,password, " Created ");
       const user = this.UserServiceClint.AddUser(_id,username,password)
       
              
       if(user != null){
       
        this.router.navigate(['profile', user._id]);
        
        
                            
      } else 

      throw "User Not found!";

      }

    
    }
      
    
       