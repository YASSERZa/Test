
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule, routing } from './app-routing.module';
import { HelpComponent } from './help/help.component';
import { FormsModule } from '@angular/forms';
import { UserServiceClint } from './services/user.service.clint';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseService } from "./services/CourseService";
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { HttpClientModule } from '@angular/common/http';









@NgModule({
  declarations: [
    
    AppComponent,
    routing
    
    
    
   ],
  imports: [ 
    BrowserModule ,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  

  ],
  providers: [UserServiceClint, CourseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
