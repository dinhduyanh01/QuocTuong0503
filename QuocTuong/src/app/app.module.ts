import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChoiComponent } from './choi/choi.component';
import { ProductComponent } from './product/product.component';
import { Pro3Component } from './pro3/pro3.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiComponent,
    ProductComponent,
    Pro3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
