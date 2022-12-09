import { Injectable } from "@angular/core";
import { RegisterComponent } from "../register/register.component";



@Injectable()




export class UserServiceClint {
  
     users = 
    [  
      
    {_id: 111, username: 'bob', password: 'bob1'},
    {_id: 222, username: 'mike', password: 'mike1'},
    {_id: 333, username: 'yasr', password: 'yasr1'}

];
 

                 
  
FindUser(username: String, password: String) {

  for (let i = 0; i < this.users.length; i++)
    { const user = this.users[i];
      if(username === user.username && password === user.password)
         return user;
                  }
                    return null;
                }

              
                
                
      AddUser(_id:number , username: string, password: string){
         
        for (let i = 0; i < this.users.length+1; i++){
          const user = this.users[i];
         if(  user.username === null )
          user._id = _id;
          user.username= username;
          user.password= password;
  
          this.users.push(user)
          return user;
  

        }
          return null;
        }
        
                }


          
          