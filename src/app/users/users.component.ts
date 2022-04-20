import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ApiInterface } from '../api-interface'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: ApiInterface[]= []

  constructor(private userService: ApiService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data =>{
        this.users=data
        

      }
      
    )
  }

}
