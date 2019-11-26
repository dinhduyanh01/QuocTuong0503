import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../DAL/data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-thi',
  templateUrl: './thi.component.html',
  styleUrls: ['./thi.component.css']
})
export class ThiComponent implements OnInit {
  
  ten;
  giatri;
  tatmo = true;
  m = 10;
  s = 0;
  tong = 0;
  timeout;
  kq = {
    value: 0,
  }
  stt = 1;
  p = 1;
  quiz: any;
  id : any;
  name: String;
  list: any;
  product: any;
  monthi: any;
  url: any;
  constructor(private datta: DataService, private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.router.paramMap.subscribe(p =>{
      this.name = p.get('user');
      this.id = p.get('Id');
      console.log(this.router);
      this.url = "../assets/Quizs/" + this.id + ".json";

    })
    this.datta.getQuizs(this.url).subscribe((dulieu) => {
      this.quiz = dulieu
    })
    // this.router.paramMap.subscribe(params =>{
    //   const id= params.get('Id')
    //   console.log(id);
      
    // })
  }
  nextpage() {
    if (this.quiz.length > this.p) {
      return this.p++;
    }
  }
  backpage() {
    if (this.p > 0) {
      return this.p--;
    }
  }
  submit(giatri) {
    for (var i = 0; i < this.quiz.length; i++) {
      if (this.quiz.length > this.p) {
        if (this.kq.value == giatri) {
          this.tong++
          this.p++
          return this.tong
        }
        else {
          this.p++
          return this.tong
        }
      }
      else {
        alert(" điểm của bạn là " + this.tong)
        break
      }
    }
  }
  thoigian() {
    if (this.s === -1) {
      this.s = 59;
      this.m = this.m - 1
    }
    if (this.m == 0) {
      this.tatmo = !this.tatmo
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {

      this.s--;
      this.thoigian();
    }, 1000);
  }


}
