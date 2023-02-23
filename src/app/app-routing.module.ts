import { DetailedCreditComponent } from './pages/detailed-credit/detailed-credit.component';
import { DetailedDebitComponent } from './pages/detailed-debit/detailed-debit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuyDebitComponent } from './pages/buy-debit/buy-debit.component';
import { BuyCreditComponent } from './pages/buy-credit/buy-credit.component';

const routes: Routes = [{ path: '', component: HomeComponent }, 
 {path: 'home', component: HomeComponent},
{path: 'buy-debit', component: BuyDebitComponent},
  {path: 'buy-credit', component: BuyCreditComponent},
  {path: 'detailed-debit', component: DetailedDebitComponent},
  {path: 'detailed-credit', component: DetailedCreditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
