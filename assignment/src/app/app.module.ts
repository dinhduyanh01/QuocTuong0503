import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ThiComponent } from './thi/thi.component';
import { SuadoitaikhoanComponent } from './suadoitaikhoan/suadoitaikhoan.component';
import { StudentComponent } from './student/student.component';
import{HttpClientModule}from '@angular/common/http'
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule}from'@angular/fire/database'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,

    TrangchuComponent,
    LienheComponent,
    GioithieuComponent,
    GopyComponent,
    HoidapComponent,
    DangnhapComponent,
    DangkiComponent,
    DoimatkhauComponent,
    DanhmucmonhocComponent,
    ThiComponent,
    SuadoitaikhoanComponent,
    StudentComponent,
   

  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: TrangchuComponent },
      { path: 'lienhe', component: LienheComponent },
      { path: 'suadoi', component: SuadoitaikhoanComponent },
      { path: 'gioithieu', component: GioithieuComponent },
      { path: 'gopy', component: GopyComponent },
      { path: 'hoidap', component: HoidapComponent },
      { path: 'dangnhap', component: DangnhapComponent },
      { path: 'dangki', component: DangkiComponent },
      { path: 'doimatkhau', component: DoimatkhauComponent },
      { path: 'DMMH/:user', component: DanhmucmonhocComponent },
      { path: 'DMMH/:user/:Id', component: ThiComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
