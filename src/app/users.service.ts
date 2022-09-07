import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //url = "https://jsonplaceholder.typicode.com/todos";
  url="http://universities.hipolabs.com/search?country=United+States";
  constructor(private http:HttpClient) { }
  
  getPost() {
      return this.http.get(this.url);
    }
}
