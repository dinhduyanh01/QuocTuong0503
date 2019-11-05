import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from "../student/student";
@Component({
  selector: 'app-formhcn',
  templateUrl: './formhcn.component.html',
  styleUrls: ['./formhcn.component.css']
})
export class FormhcnComponent implements OnInit {
  selectedId = -1
  formstudent = {
    Id: null,
    Fullname: null,
    Birthday: null,
    Mark: null
  }
  show = true
  student: Student[] = [{
    Id: 1,
    Fullname: 'Nguyễn văn a',
    Birthday: new Date(2019, 6, 30),
    Mark: 8
  },
  {
    Id: 2,
    Fullname: 'Nguyễn văn b',
    Birthday: new Date(2019, 6, 30),
    Mark: 8
  },

  ]
  luong = {
    giatri: 2000001
  }
  dulieu = [
    {
      name: "Nước ngọt",
      price: 10000,
      thanhtien: null,
      soluong: null
    },
    {
      name: "Cà phê đen",
      price: 12000,
      thanhtien: null,
      soluong: null
    },
    {
      name: "Thuốc lá",
      price: 18000,
      thanhtien: null,
      soluong: null
    },
  ];
  soluong1: 1;
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
    else {
      return this.thuongtet = this.thuong.luong * this.thuong.rate
    }
  }
  tinhtien() {
    for (var i = 0; i < this.dulieu.length; i++) {
      for (var j = 0; j < this.dulieu.length; j++) {
        return this.dulieu[i].thanhtien = this.soluong1 * this.dulieu[i].thanhtien
      }

    }
  }
  thongbao() {
    if (this.luong.giatri >= 2000000) {
      return this.luong.giatri
    }
    else {

      alert("nhập sai")
    }

  }
  xeploai(hocsinh: Student) {
    if (hocsinh.Mark > 0 && hocsinh.Mark < 5) {
      return 'yếu kém'
    }
    else if (hocsinh.Mark > 5 && hocsinh.Mark < 8) {
      return 'trung bình khá'
    }
    else {
      return 'giỏi'
    }
  }
  anhien(student: Student) {
    this.show = !this.show
    this.formstudent = {
      Id: student.Id,
      Fullname: student.Fullname,
      Birthday: new Date(student.Birthday).toISOString().substring(0,10),
      Mark: student.Mark
    }
    this.selectedId = this.formstudent.Id
  }
  luu(id: number) {
    let index = this.student.indexOf(this.student.find(sv => sv.Id ===id))
    this.student[index] = Object.assign(this.formstudent)
    this.show = !this.show
  }
  add() {
    this.formstudent.Id = this.student.length + 1;
    this.student.push(Object.assign(this.formstudent))
    this.formstudent = {
      Id: null,
      Fullname: null,
      Birthday: null,
      Mark: null
    }
  }
  confirm(id) {
    {
         for (let i = 0; i < this.student.length; i++) {
           if (this.student[i].Id == id) {
           this.student.splice(i, 1)
           }
         }
       }
     }
}


