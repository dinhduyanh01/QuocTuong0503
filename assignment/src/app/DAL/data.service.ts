import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  mang = [
    {
        "username": "teonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Tèo",
        "email": "teonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1995-12-21",
        "schoolfee": "1500000",
        "marks": "0"
    },
    {
        "username": "pheonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Chí Phèo",
        "email": "pheonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1985-10-11",
        "schoolfee": "2500000",
        "marks": "0"
    },
    {
        "username": "nopt",
        "password": "iloveyou",
        "fullname": "Phạm Thị Nở",
        "email": "nopt@fpt.edu.vn",
        "gender": "false",
        "birthday": "1993-05-15",
        "schoolfee": "2000000",
        "marks": "0"
    }
]
  constructor(private http : HttpClient) { }
  getdulieu(){
    return this.http.get("../assets/Students.json")
  }
  getQuiz(url)
  {
    return this.http.get(url);
  }
  getsubject()
  {
    return this.http.get('../assets/Subjects.json')
  }
  getitem()
  {
    return this.mang
  }
  additem(giatri)
  {
    this.mang.push(giatri)
  }

}
