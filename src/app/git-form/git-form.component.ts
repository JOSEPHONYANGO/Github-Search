import { Component, OnInit,Output } from '@angular/core';
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

  submitUsername() {
		this.searchGithubService.getUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
    this.showInput = false;
    this.showData = true;
	}
  showUserInput(hideInput) {
    this.showInput = hideInput;
    this.showData = false;
  }
  

  constructor(searchGithubService:SearchGithubService) { 
    searchGithubService:SearchGithubService
  }

  ngOnInit() {
  }

}
