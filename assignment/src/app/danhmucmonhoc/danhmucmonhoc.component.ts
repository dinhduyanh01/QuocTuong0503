import { Component, OnInit } from '@angular/core';
import{NgxPaginationModule} from 'ngx-pagination';
import{DataService} from '../DAL/data.service';
@Component({
  selector: 'app-danhmucmonhoc',
  templateUrl: './danhmucmonhoc.component.html',
  styleUrls: ['./danhmucmonhoc.component.css']
})
export class DanhmucmonhocComponent implements OnInit {
 p=1;
 product
  
  constructor(private dataa : DataService) { }

  ngOnInit() {
      this.dataa.getsubject().subscribe(data =>{
        this.product = data
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
