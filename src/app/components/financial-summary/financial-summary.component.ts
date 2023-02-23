import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-summary',
  templateUrl: './financial-summary.component.html',
  styleUrls: ['./financial-summary.component.css']
})
export class FinancialSummaryComponent implements OnInit {

  constructor(private router: Router) {
    
  }

  @Input() data: any;

  ngOnInit(): void {
    console.log(this.data)
  }


    goToRoute(route: any){
      
      this.router.navigate([route])

    }
}

