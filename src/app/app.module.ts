import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BuyDebitComponent } from './pages/buy-debit/buy-debit.component';
import { PurchaseDescriptionComponent } from './components/purchase-description/purchase-description.component';
import {MatIconModule} from '@angular/material/icon';
import { FinancialSummaryComponent } from './components/financial-summary/financial-summary.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DetailedDebitComponent } from './pages/detailed-debit/detailed-debit.component';
import { BuyCreditComponent } from './pages/buy-credit/buy-credit.component';
import { DetailedCreditComponent } from './pages/detailed-credit/detailed-credit.component';
import { MapsComponent } from './components/maps/maps.component';
import { CardDataComponent } from './components/card-data/card-data.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyDebitComponent,
    PurchaseDescriptionComponent,
    FinancialSummaryComponent,
    DetailedDebitComponent,
    BuyCreditComponent,
    DetailedCreditComponent,
    MapsComponent,
    CardDataComponent,
    ReturnButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
