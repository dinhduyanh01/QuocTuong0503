import { Component, OnInit } from '@angular/core';
import { DataService } from '../DAL/data.service'
@Component({
  selector: 'app-suadoitaikhoan',
  templateUrl: './suadoitaikhoan.component.html',
  styleUrls: ['./suadoitaikhoan.component.css']
})
export class SuadoitaikhoanComponent implements OnInit {
  Students
  Suadoi = {
    tenmoi: null,
    tencu: null,
    emailcu: null,
    emailmoi: null
  }
  constructor(private dataa: DataService) { }

  ngOnInit() {
    this.dataa.getsubject().subscribe(dulieu1 => {
      this.Students = dulieu1
    })
  }
  suadoi() {
    for (var i = 0; i < this.Students.length; i++) {
      if (this.Suadoi.tencu === this.Students[i].fullname && this.Suadoi.emailcu === this.Students[i].email) {
        this.Students[i].fullname = this.Suadoi.tenmoi
        this.Students[i].email = this.Suadoi.emailmoi
        alert("đổi thành công")
        break
      }
      else {
        if (i === this.Students.length - 1) {
          alert("nhập sai")
        }
        continue
      }
    }
  }
}
