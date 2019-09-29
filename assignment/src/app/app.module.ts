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
    SuadoitaikhoanComponent
  ],
  imports: [
    NgxPaginationModule,
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
      { path: 'DMMH', component: DanhmucmonhocComponent },
      { path: 'DMMH/:ID', component: ThiComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
