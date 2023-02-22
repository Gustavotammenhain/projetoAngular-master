import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.css']
})
export class ReturnButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  goToRoute(route: any){
      
    this.router.navigate([route])

  }
}
