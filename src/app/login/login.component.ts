import { Component,Injectable, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserServiceClint } from '../services/user.service.clint';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: any;
  password: any;
  _id: any;



  constructor(private router: Router, private UserServiceClint: UserServiceClint) { }
ngOnInit(): void {}

      login(username: String, password: String) {

          console.log(username, password);
          const user =this.UserServiceClint.FindUser(username, password);

          if(user != null)
          this.router.navigate(['profile', user._id]);
          
           else 

          throw "User Not found!";

          }

          register(username: String, password: String){
            this.router.navigate(['register']);
          }
          
        }