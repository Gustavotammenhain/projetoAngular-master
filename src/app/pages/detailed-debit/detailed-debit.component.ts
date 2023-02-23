import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-debit',
  templateUrl: './detailed-debit.component.html',
  styleUrls: ['./detailed-debit.component.css']
})
export class DetailedDebitComponent implements OnInit {

  constructor(private location: Location) { }
  data: any
  ngOnInit(): void {
    this.data = this.location.getState()

  }

}
