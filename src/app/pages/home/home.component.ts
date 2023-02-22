import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  finnancialData = {totalBalance: 26984, lastBuys: 7484, totalDebit: 90, totalCredit: 10,}
  
  ngOnInit(): void {
  }

}
