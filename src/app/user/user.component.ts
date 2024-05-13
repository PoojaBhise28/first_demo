import { Component } from '@angular/core';
import { TaxModel } from '../tax/TaxModel';
import { UserModel } from './UserModel';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
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

  constructor(){
    
  }
}
