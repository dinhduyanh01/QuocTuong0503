import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router'
import{DataService} from '../DAL/data.service';
@Component({
  selector: 'app-thi',
  templateUrl: './thi.component.html',
  styleUrls: ['./thi.component.css']
})
export class ThiComponent implements OnInit {
  quiz : any
  id : String
  name : String
  list : any
  product : any
  monthi : any
  url : String
  constructor(private datta : DataService , private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.id = para.get("Id")
    });
    this.url = this.id 
    this.datta.getQuiz(this.url).subscribe((dulieu) =>
    {
      this.quiz = dulieu
    })
  }

}
