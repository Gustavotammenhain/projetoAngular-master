import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-purchase-description',
  templateUrl: './purchase-description.component.html',
  styleUrls: ['./purchase-description.component.css']
})
export class PurchaseDescriptionComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() description: string='';
  @Input() date: string='';
  @Input() value: string='';
 


  ngOnInit(): void {
    
  }

  goToRoute(route: any){
      
    this.router.navigate([route])

  }

  detailedPurchese(){
    console.log("descrip", this.description)
    console.log("date", this.date)
    console.log("vale", this.value)
    if(this.router.url.includes('debit')){
      this.router.navigate(['detailed-debit'], {state : {description: this.description, date: this.date, value: this.value}})
    }else{
      this.router.navigate(['detailed-credit'],  {state : {description: this.description, date: this.date, value: this.value}})
    }
    
  }
}
