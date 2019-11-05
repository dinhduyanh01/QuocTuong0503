import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  getdata(){
    return this.http.get('../assets/Students.js')
  }
  getsubject()
  {
    return this.http.get('../assets/Subjects.js')
  }
  
}
