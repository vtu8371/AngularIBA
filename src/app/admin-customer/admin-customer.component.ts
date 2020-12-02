import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToAdd(){
    this.route.navigate(['./addCustomer']);
  }
  goToViewAll(){
    this.route.navigate(['./viewAllCustomer']);
  }
  goToViewById(){
    this.route.navigate(['./viewByIdCustomer']);
  }
}
