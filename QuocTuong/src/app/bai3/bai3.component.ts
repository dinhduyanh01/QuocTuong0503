import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  dulieu = [{ "id": "pd100", "image": "laptop.jpg", "Name": "Laptop", "Price": 30000, "Quatity": 3 }, { "id": "pd101", "image": "dienthoai.jpg", "Name": "Mobile", "Price": 54000, "Quatity": 6 }, { "id": "pd102", "image": "laptop.jpg", "Name": "Television", "Price": 22000, "Quatity": 6 }, { "id": "pd103", "image": "dienthoai.jpg", "Name": "Headphone", "Price": 1300, "Quatity": 13 }]
   a= false
  constructor() { }

  ngOnInit() {
  }
  abc(id) {
    for (var i = 0; i < this.dulieu.length; i++) {
      if (this.dulieu[i].id == id) {
        this.dulieu[i].Quatity++;
      }
    }
    

  }
  
  tinhtong() {
    var s = 0;
    for (var i = 0; i < this.dulieu.length; i++) {
      s = s + this.dulieu[i].Price * this.dulieu[i].Quatity;
    }
    return s;
  }
  hienhinh() {
  
  this.a =true
  return this.a;
  }
  donghinh(){
    this.a =false
    return this.a
  }
  abd(id) {
    for (var i = 0; i < this.dulieu.length; i++) {
      if (this.dulieu[i].id == id) {
        this.dulieu[i].Quatity--;
      }
    }
}
}
