import { Component } from '@angular/core';
import { TaxModel } from '../tax/TaxModel';
import { UserModel } from './UserModel';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseModel } from '../Responsemodel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  initialUserData :UserModel ={
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: ''
  }

  userInfo? :UserModel;
  result?: ResponseModel;
  res? :ResponseModel;


  constructor(private userService :UserService , private route :ActivatedRoute){
    
  }

  ngOnInit(): void {
     this.initialUserData.id = Number(this.route.snapshot.params['id'])
     console.log(this.initialUserData.id);
     if(0 !== this.initialUserData.id && !Number.isNaN(this.initialUserData.id)){
      this.fetchDataById(this.initialUserData.id);
         }
  }


//running
  // ngOnInit(): void {
  //   this.initialUserData.id = Number(this.route.snapshot.params['id'])
  //   console.log(this.initialUserData.id);
  //   if (0 !== this.initialUserData.id && !Number.isNaN(this.initialUserData.id)) {
  //     this.fetchDataById(this.initialUserData.id);
  //   }

  // }


  async fetchDataById (id:number){
    this.result = await this.userService.GetUserByIdAsync(id);
    this.userInfo = this.result.data;
    this.initialUserData = this.result.data;
    console.log(this.initialUserData);
  }

  async fetchData(){
    this.result = await this.userService.GetUserAsync()
    this.userInfo = this.result.data;
    console.log(this.userInfo)
  }

 async handelSubmit() {
  console.log(this.initialUserData.id)
  if(!this.initialUserData.id ){
    console.log("add data");
    this.userService.CreateUserAsync(this.initialUserData);

  }
  else{
    console.log("update");
    this.userService.UpdateUserAsync(this.initialUserData);
  }
  console.log(this.result);
 }

}

