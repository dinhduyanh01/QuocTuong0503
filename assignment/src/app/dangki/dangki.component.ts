import { Component, OnInit } from '@angular/core';
import { DataService } from '../DAL/data.service'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  item
  giatri
  Mark = 0;
  Students
  constructor(private dataa: DataService, private route: ActivatedRoute) { 

  }
  dulieu = {
    "username": null,
    "password": null,
    "fullname": null,
    "email": null,
    "gender": null,
    "birthday": null,
    "schoolfee": null,
    "marks": null
  }

  ngOnInit() {
    this.item = this.dataa.mang
    this.dataa.getsubject().subscribe(dulieu1 => {
      this.Students = dulieu1
    })
    
    
  }

  laydulieu() {
    for (var i = 0; i < this.Students.length; i++) {
      if (this.dulieu.username === this.Students.username) {
        alert("trùng rồi")
        break
      }
      else {
        this.dataa.additem(Object.assign(this.dulieu))
        this.dulieu = {
          "username": null,
          "password": null,
          "fullname": null,
          "email": null,
          "gender": null,
          "birthday": null,
          "schoolfee": null,
          "marks": null
        }
        
        alert("thêm vào thành công")
        break;
      }
    }
  }




}
