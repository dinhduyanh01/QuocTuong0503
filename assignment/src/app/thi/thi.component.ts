import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../DAL/data.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-thi',
  templateUrl: './thi.component.html',
  styleUrls: ['./thi.component.css']
})
export class ThiComponent implements OnInit {
  tong = 0;
  kq = {
    value: 0,
  }
  stt = 1;
  p = 1;
  quiz: any
  id: any
  name: String
  list: any
  product: any
  monthi: any
  url: String
  constructor(private datta: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.id = para.get("Id")
      this.url = "../assets/Quizs/" + this.id + ".json"
    });

    this.datta.getQuiz(this.url).subscribe((dulieu) => {
      this.quiz = dulieu
    })
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
      }
    }
  }

}
