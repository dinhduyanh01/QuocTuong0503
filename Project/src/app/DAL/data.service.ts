import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  getproduct(){
    return this.http.get('../assets/guitar.json')
  }
  getcategories(){
    return this.http.get('../assets/categories.json')
  }
}
