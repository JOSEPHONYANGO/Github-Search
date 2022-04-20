import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';
import {ApiInterface} from './api-interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user='JOSEPHONYANGO'

  GH_API= `https://api.github.com/${this.user}`
  BASE_URL:string = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getUsers():Observable<ApiInterface[]>{
    return this.http.get<ApiInterface[]>(this.BASE_URL + '/users')

  }
  getGithubUser():Observable<any>{
    return this.http.get<any>(this.GH_API)
  }
  getUserById(){

  }
  getPosts():Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/`)

  }

}


