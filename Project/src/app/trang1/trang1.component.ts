import { Component, OnInit } from '@angular/core';
import{DataService}from '../DAL/data.service';
import { from } from 'rxjs';
import{ActivatedRoute}from '@angular/router'
@Component({
  selector: 'app-trang1',
  templateUrl: './trang1.component.html',
  styleUrls: ['./trang1.component.css']
})
export class Trang1Component implements OnInit {
  id;
  products :any
  product :any;
  list:any;
  cato :any
  guitar : any
  constructor(private dataaa : DataService , private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.dataaa.getproduct().subscribe(gui => {
      this.guitar = gui
    })
    this.dataaa.getcategories().subscribe(catoo => 
      {
        this.cato = catoo
      })
      this.loaddata();
  }
  loaddata()
  {
    this.route.paramMap.subscribe(para=>{
      this.id = +para.get("id")
    })
    if(this.id !=0)
    {
      this.dataaa.getproduct().subscribe(data =>{
        this.product =data
        this.products = this.products.filter(p=>p.id === this.id)
      })
    }
    else
    {
      this.dataaa.getproduct().subscribe(data =>{
        this.product =data
       
      })
    }
  }

}
