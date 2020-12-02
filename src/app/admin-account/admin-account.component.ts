import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToAdd(){
    this.route.navigate(['./addAccount'])
  }
  goToViewAll(){
    this.route.navigate(['./viewAllAccounts'])
  }
  goToById(){
    this.route.navigate(['./viewByIdAccount'])
  }
}
