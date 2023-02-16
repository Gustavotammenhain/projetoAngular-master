import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-buy-debit',
  templateUrl: './buy-debit.component.html',
  styleUrls: ['./buy-debit.component.css']
})
export class BuyDebitComponent implements OnInit {

  constructor() { }

  purchases = [{compra:'DECIT', data:'2121'},
  {compra:'DECIT', data:'2121', valor:'27,50'},
  {compra:'DECIT', data:'2121', valor:'27,50'},
  {compra:'DECIT', data:'2121', valor:'27,50'}]

  ngOnInit(): void {
  }

}
