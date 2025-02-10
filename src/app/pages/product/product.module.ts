import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductPage } from './product.page';
import { ProductPageRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProductPageRoutingModule,
    ProductPage
  ]
})
export class ProductPageModule {}
