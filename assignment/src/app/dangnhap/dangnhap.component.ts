import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ActivatedRoute}from '@angular/router'
import { DataService } from '../DAL/data.service';


@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  dangnhap1;
    taikhoan: null;
    matkhau: null;
  dem
  
  constructor(private dataa: DataService) { }

  ngOnInit() {
    this.dataa.getdulieu().subscribe(dulieu => {
      this.dangnhap1 =dulieu
      
    });
  }
  

  login() {
   for(var i=0 ; i < this.dangnhap1.length; i++)
   {
     if(this.taikhoan === this.dangnhap1[i].username && this.matkhau === this.dangnhap1[i].password)
     {
       alert("đăng nhập thành công")
       break;
      
     }
     else
     {
      
      if(i === this.dangnhap1.length-1)
      {
        alert("nhập sai rồi")

      }
      continue  
     }
   }
  }

}
