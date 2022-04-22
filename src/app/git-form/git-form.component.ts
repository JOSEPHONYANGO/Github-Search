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
  // user:User;
  user:any;
	username:string; 
	// searchGithubService:SearchGithubService;  
  public showInput = true; 
  public showData = false; 

  async submitUsername(){
    try{
      console.log(this.username)
      let res=await this.searchGithubService.getUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
      this.user=res
      console.log(res)
    }catch(e){
      console.log(e)
    }
    // this.showInput = false;
    // this.showData = true;
	}
  showUserInput(hideInput) {
    this.showInput = hideInput;
    this.showData = false;
  }
  

  constructor(private searchGithubService:SearchGithubService) { 
    // searchGithubService:SearchGithubService
  }

  ngOnInit() {
  }

}
