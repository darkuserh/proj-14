import { Component, OnInit } from '@angular/core';
import{UserService} from '../Services/user.service'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  // providers:[UserService]
})
export class AdduserComponent implements OnInit{
  username:string='';
  userstatus:string='active';
constructor(private userService:UserService){

}
ngOnInit(): void {
  
}
AddUser(){
  this.userService.AddNewUser(this.username,this.userstatus)
  console.log(this.userService.users)
}
}
