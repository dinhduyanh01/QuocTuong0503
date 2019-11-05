import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient) { }
  getdulieu(){
    return this.http.get("../assets/Students.json")
  }
  getQuiz(url:String)
  {
    return this.http.get('../assets/Quizs/' + url + '.json');
  }
  getsubject()
  {
    return this.http.get('../assets/Subjects.json')
  }

}
