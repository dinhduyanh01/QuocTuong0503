import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChoiComponent } from './choi/choi.component';
import { ProductComponent } from './product/product.component';
import { Pro3Component } from './pro3/pro3.component';
import { Bai3Component } from './bai3/bai3.component';
import { RouterModule } from '@angular/router';
import { FormhcnComponent } from './formhcn/formhcn.component';


@NgModule({
  declarations: [
    AppComponent,
    ChoiComponent,
    ProductComponent,
    Pro3Component,
    Bai3Component,
    FormhcnComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
      RouterModule.forRoot([ 
      { path: "", 	component: ProductComponent }, 
      {path: 'product', component:ProductComponent},
      {path: 'form', component : FormhcnComponent},
      { path: 'product/:productId', component: ChoiComponent },
      { path: '**', redirectTo: 'product', pathMatch: 'full' },
    
  ])
],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
