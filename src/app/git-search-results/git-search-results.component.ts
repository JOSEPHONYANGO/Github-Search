import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-git-search-results',
  templateUrl: './git-search-results.component.html',
  styleUrls: ['./git-search-results.component.css']
})
export class GitSearchResultsComponent implements OnInit {

    user:any; 
    repoDetails = []; // Property we'll use in our git-search-results.component.html to render the Repository instances
    // searchGithubService:SearchGithubService; // Declare the searchGithubService which is of type SearchGithubService we imported from src/app/search-github.service  
    hideInput:boolean;

  // constructor(searchGithubService:SearchGithubService) { 
  //   this.searchGithubService = searchGithubService;
  // }

  constructor(private searchGithubService:SearchGithubService){
  }

  @Output() toggleBack = new EventEmitter();

  goBack(){
    this.hideInput = true;
    this.toggleBack.emit(this.hideInput);
  }

  async ngOnInit(){
    // this.user = this.searchGithubService.user;
    // this.repoDetails = this.searchGithubService.repoData;
    this.searchGithubService.searchUserEvent.subscribe((res)=>{
      if(res.status){
        this.user=res.data
      }
    })
  }

}
