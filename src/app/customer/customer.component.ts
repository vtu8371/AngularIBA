import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToTransaction(){
    this.route.navigate(['./transaction']);
  }
  goToBeneficiary(){
    this.route.navigate(['./beneficiary']);
  }
  goToNominee(){
    this.route.navigate(['./nominee']);
  }
  goToMyProfile(){
    this.route.navigate(['./myProfile']);
  }

}
