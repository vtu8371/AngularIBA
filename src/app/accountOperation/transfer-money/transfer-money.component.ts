import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  transfer(){
    alert("Transfer Successfully!");
  }
  cancel(){
    this.location.back();
  }
}
