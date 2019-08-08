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
import {
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import { PromotionsComponent } from './promotions/promotions.component';
import {OwlModule} from 'ngx-owl-carousel';
import { ReservationComponent } from './reservation/reservation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MenuComponent,
    PromotionsComponent,
    ReservationComponent
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
    OwlModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
