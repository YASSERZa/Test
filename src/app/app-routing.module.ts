

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { UserServiceClint } from "./services/user.service.clint";
import { CourseNavigatorComponent } from "./course-navigator/course-navigator.component";




const routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'help', component: HelpComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'profile/:userId', component: ProfileComponent},
{ path: 'course', component: CourseNavigatorComponent},



];


@NgModule({
     imports : [RouterModule.forRoot(routes)],

       exports : [RouterModule]
}
    
    )

    

export class AppRoutingModule {

}
export const routing = [LoginComponent,RegisterComponent,ProfileComponent,HelpComponent,CourseNavigatorComponent]


