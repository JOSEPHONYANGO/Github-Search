import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gh-user',
  templateUrl: './gh-user.component.html',
  styleUrls: ['./gh-user.component.css']
})
export class GhUserComponent implements OnInit {
  user!: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGithubUser().subscribe(
      data=>{
        this.user=data
      console.log(this.user);}
    )

  }

}
