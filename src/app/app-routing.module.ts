import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuyDebitComponent } from './pages/buy-debit/buy-debit.component';

const routes: Routes = [{ path: '', component: HomeComponent }, 
 {path: 'home', component: HomeComponent},
{path: 'buy-debit', component: BuyDebitComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
