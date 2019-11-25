import { Component, OnInit } from '@angular/core';
import{NgxPaginationModule} from 'ngx-pagination';
import{DataService} from '../DAL/data.service';
import{ActivatedRoute,Router}from'@angular/router'
import { from } from 'rxjs';
import{HttpClient}from '@angular/common/http'
@Component({
  selector: 'app-danhmucmonhoc',
  templateUrl: './danhmucmonhoc.component.html',
  styleUrls: ['./danhmucmonhoc.component.css']
})
export class DanhmucmonhocComponent implements OnInit {
 p=1;
 user 
 product
  getten
  constructor(private dataa : DataService ,
    private http: HttpClient,
    private link : ActivatedRoute , private router : ActivatedRoute) { }

  ngOnInit() {
    this.link.paramMap.subscribe(para =>{
      this.user = para.get("user")
    })
      this.dataa.getsubject().subscribe(data =>{
        this.product = data
      })
      this.dataa.getdulieu().subscribe(day =>{
        this.getten = day
      })

  }

  nextpage(){
      if(this.product.length/ 4 > this.p )
      {
         return this.p ++;
      }
  }
  backpage()
  {
      if(this.p >0)
      {
        return this.p --;
      }
  }
}
