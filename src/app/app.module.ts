import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import localeBd from '@angular/common/locales/bn';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeBd, 'bn');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: LOCALE_ID, useValue: 'bn' } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
