import { Component, OnInit } from '@angular/core';
import {SearchGithubService} from '../search-github.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  user:User;
	username:string; 
	searchGithubService:SearchGithubService;  
  public showInput = true; 
  public showData = false; 


  constructor() { }

  ngOnInit(): void {
  }

}
