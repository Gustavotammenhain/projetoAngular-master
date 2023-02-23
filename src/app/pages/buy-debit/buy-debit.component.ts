import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-buy-debit',
  templateUrl: './buy-debit.component.html',
  styleUrls: ['./buy-debit.component.css']
})
export class BuyDebitComponent implements OnInit {

  constructor() { }
  compras = [{id: 0, local: 'Merceraria 1 ', date: '11/02/2023', value: 100},
  {id: 1, local: 'Merceraria 2', date: '11/02/2023', value: 100},
  {id: 2, local: 'Merceraria 3', date: '11/02/2023', value: 100},
  {id: 3, local: 'Merceraria 4', date: '11/02/2023', value: 100}
]

  ngOnInit(): void {
  }
  adicionar(){
    this.compras.push({id: 5, local: '2', date: '22222', value: 500})
  }

}
