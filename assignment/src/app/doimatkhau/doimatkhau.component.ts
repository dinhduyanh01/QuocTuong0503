import { Component, OnInit } from '@angular/core';
import { DataService } from '../DAL/data.service';
import { NullTemplateVisitor } from '@angular/compiler';
@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {
  matkhau = {
    taikhoan: null,
    matkhaucu: null,
    matkhaumoi: null
  }
  dulieu;

  constructor(private dataa: DataService) { }

  ngOnInit() {
    this.dataa.getdulieu().subscribe(dulieu => {
      this.dulieu = dulieu
    })
  }
  doimatkhau() {
    for (var i = 0; i < this.dulieu.length; i++) {
      if (this.matkhau.taikhoan === this.dulieu[i].username && this.matkhau.matkhaucu === this.dulieu[i].password) {
        this.dulieu[i].password = this.matkhau.matkhaumoi
        alert("đổi thành công")
        break
      }
      else {
        if (i === this.dulieu.length - 1) {
          alert("không đúng")
        }
        continue
      }
    }

  }

}
