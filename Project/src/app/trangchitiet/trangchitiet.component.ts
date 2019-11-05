import { Component, OnInit } from '@angular/core';
import{DataService}from '../DAL/data.service';
import{ActivatedRoute}from '@angular/router'
@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.css']
})
export class TrangchitietComponent implements OnInit {
  list : any
  cato :any
  guitar : any
  product :any;
  id;
  rout : ActivatedRoute ;
  constructor(private dataaa : DataService ,private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.dataaa.getproduct().subscribe(gui => {
      this.guitar = gui
    });
    this.dataaa.getcategories().subscribe(catoo => 
      {
        this.cato = catoo
      });
     
      this.route.paramMap.subscribe(para => {this.id = +para.get('id')});
       this.dataaa.getproduct().subscribe(gui=>{
        this.list = gui
        this.product = this.list.find(p => p.id === this.id)
      })
  }
}
