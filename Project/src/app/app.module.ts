import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Trang1Component } from './trang1/trang1.component';
import{HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
@NgModule({
  declarations: [
    AppComponent,
    Trang1Component,
    TrangchitietComponent
  ],
  imports: [
    HttpClientModule,
    
    BrowserModule,
      RouterModule.forRoot([ 
      { path: "", 	component: Trang1Component},
      { path: "trang1", 	component: Trang1Component},
      { path: "trang1/:id", 	component: TrangchitietComponent},
      
  ]),
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
