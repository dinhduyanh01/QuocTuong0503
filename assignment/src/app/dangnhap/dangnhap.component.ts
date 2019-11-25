import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ActivatedRoute ,Router}from '@angular/router'
import { DataService } from '../DAL/data.service';


@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  giatri
  dangnhap1;
    taikhoan: null;
    matkhau: null;
  item
  
  constructor(private dataa: DataService ,private routerr : Router) { }

  ngOnInit() {
   
    this.item = this.dataa.mang
    this.dataa.getdulieu().subscribe(dulieu => {
      this.dangnhap1 =dulieu
      
    });
    
  }
  

  login() {
   for(var i=0 ; i < this.item.length; i++)
   {
     if(this.taikhoan === this.item[i].username && this.matkhau === this.item[i].password)
     {
       alert("đăng nhập thành công")
      
       this.routerr.navigate(['/DMMH',this.taikhoan]) 
       break;
      
     }
     else
     {
      
      if(i === this.item.length-1)
      {
        alert("nhập sai rồi")

      }
      continue  
     }
   }
  }

}
