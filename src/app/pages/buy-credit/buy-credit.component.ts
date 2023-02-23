import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-credit',
  templateUrl: './buy-credit.component.html',
  styleUrls: ['./buy-credit.component.css']
})
export class BuyCreditComponent implements OnInit {

  compras = [{id: 0, local: 'Merceraria 1 ', date: '11/02/2023', value: 100},
  {id: 1, local: 'Merceraria 2', date: '11/02/2023', value: 100},
  {id: 2, local: 'Merceraria 3', date: '11/02/2023', value: 100},
  {id: 3, local: 'Merceraria 4', date: '11/02/2023', value: 100}
]
  constructor() { }

  ngOnInit(): void {
  }

}
