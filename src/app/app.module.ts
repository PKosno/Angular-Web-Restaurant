import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SystemModule} from './system/system.module';
import {SystemComponent} from './system/system.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollDispatchModule, ScrollingModule} from '@angular/cdk/scrolling';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule, MatDividerModule} from '@angular/material';
import { PromotionsComponent } from './promotions/promotions.component';
import {OwlModule} from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MenuComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SystemModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ScrollingModule,
    MatDividerModule,
    MatCardModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
