//import modules can be used to imort modules,servies and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { MyTopBarComponent } from './my-top-bar/my-top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
//@ngmodule  decorator helps to create a method
@NgModule({
  //the import array
  //importing other modules
  imports: [
    //providing browser pltform support
    BrowserModule,
    //Support reactive form,(alternate -template driven forms)
    ReactiveFormsModule,
    // My appModule nedds to use another module httpclients module
    //Access restful services
    HttpClientModule,
    //configuring paths and components
    RouterModule.forRoot([
      // if no url .router navigates to product list components
      { path: '', component: ProductListComponent },
      // :productId is the routeparam
      { path: 'products/:productId', component: ProductDetailsComponent },
       { path: 'cart', component: CartComponent },
       {path: 'shipping',component: ShippingComponent }

    ])
  ],
  declarations: [
    // These components belongs to this module(app.moduel)
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    MyTopBarComponent,
    MyTopBarComponent,
    ShippingComponent
  ],
  bootstrap: [
    //The intial compenent that gets loaded(its like PSV main in jav)
    AppComponent
  ],
  //These below services are used in this module
  providers: [CartService]
})
//export makes the Appmodule accessable outside this file(module)
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/