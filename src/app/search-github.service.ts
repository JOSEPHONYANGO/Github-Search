import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repository } from './repository';
import * as process from 'process';

@Injectable()
export class SearchGithubService {
  // user:User; // We'll need the User blueprint class for Creating a new User Instance
	user:any={}
  repository:Repository; // // We'll need the Repository blueprint class for Creating a new Repository Instance
	repoData = []; // Created an Empty Multi-Dimensional Array that we'll User for Every Repository Instance we get from a given Username
	newUserData :any = []; // This Array Holds the Property for Every Array we Push to the repoData Array
	showInput:boolean;
	showData:boolean;
  searchUserEvent=new EventEmitter()

  constructor(private http: HttpClient) {
    this.user = new User("",0,"","",new Date(),new Date(),"");
  		this.repository = new Repository("","","",new Date(),"","","",new Date()); 		
   }

   getUserData(username: string){
    this.repoData.length = 0; 

    interface ApiResponse{
      bio:string,
      public_repos:number,
      login:string,
      avatar_url?:string,
      created_at:Date, 
      updated_at:Date,
      name:string,
      full_name:string, 
      html_url:string   
  } 
    return new Promise((resolve,reject)=>{
		this.http.get("https://api.github.com/users/" + username).toPromise().then((res)=>{
         console.log(res)
         this.user=res
         this.searchUserEvent.emit({status:true,data:res})
		 resolve(res)
		}).catch((e)=>{
      this.searchUserEvent.emit({status:false})
			reject(e)
			console.log(e)
		})
	})
//   let promise =new Promise((resolve,reject)=>{
//     this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
//                 console.log(response)
// 	            this.user.bio=response.bio;
// 	            this.user.avatar_url=response.avatar_url;
// 	            this.user.login=response.login;
// 	            this.user.public_repos=response.public_repos;
// 	            this.user.created_at=response.created_at;
// 	            this.user.updated_at=response.updated_at;
// 	            this.user.html_url=response.html_url;

//               resolve(response)
// 	        },
// 	        error=>{
// 	                reject(error)
// 	            }
// 	        )

//           this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{

//             for(var i=0; i<response.length; i++)
// 	        	{
//               this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
// 	        		this.repoData.push(this.newUserData);
// 	        	}

// 	            resolve()

// 	        },
// 	        error=>{

// 	                reject(error)
// 	            }
// 	        )
// 	    })
//       return promise
	}

	



}


