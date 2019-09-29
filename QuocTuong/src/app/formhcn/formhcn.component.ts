import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formhcn',
  templateUrl: './formhcn.component.html',
  styleUrls: ['./formhcn.component.css']
})
export class FormhcnComponent implements OnInit {
  a = null
  thuongtet = 0;
  hcn = {
    chieudai: null,
    chieurong: null,
    dientich: null,
    chuvi: null
  }
  thuong = {
    ten: null,
    luong: 1000,
    gioitinh: "Nam",
    rate: 0.1,

  }
  tuoithuong = [{
    age: "dưới 25",
    giatri: 0.07,
  }, 
  {
    age: "25 đến 40",
    giatri: 0.1,
  },
   {
    age: "trên 40",
    giatri: 0.15,
  }]
  constructor() { }

  ngOnInit() {
  }
  tinh() {
    this.hcn.chuvi = this.hcn.chieudai * this.hcn.chieurong;
    this.hcn.dientich = this.hcn.chieudai * 2 + this.hcn.chieurong * 2

  }
  tinhthuong() {
    if (this.thuong.gioitinh == "Nu") {
      return this.thuongtet = this.thuong.luong * this.thuong.rate + 200000
    }
    else
    {
      return this.thuongtet =this.thuong.luong*this.thuong.rate
    }
  }
}
