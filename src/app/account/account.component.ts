import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToTransferMoney(){
    this.route.navigate(['./transferMoney']);
  }
  goToWithdrawMoney(){
    this.route.navigate(['./withdrawMoney']);
  }
  goToDepositMoney(){
    this.route.navigate(['./depositMoney']);
  }
}
