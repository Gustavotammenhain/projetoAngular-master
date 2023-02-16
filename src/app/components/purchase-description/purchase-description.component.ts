import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-purchase-description',
  templateUrl: './purchase-description.component.html',
  styleUrls: ['./purchase-description.component.css']
})
export class PurchaseDescriptionComponent implements OnInit {

  constructor() { }

  @Input() description: string='';
  @Input() date: string='';
  @Input() value: string='';
 


  ngOnInit(): void {
    
  }

}
