import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-admin',
  templateUrl: './admin-admin.component.html',
  styleUrls: ['./admin-admin.component.css']
})
export class AdminAdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToAdd(){
    this.route.navigate(['./addAdmin']);
  }
  goToViewAll(){
    this.route.navigate(['./viewAllAdmin']);
  }
  goToViewById(){
    this.route.navigate(['./viewByIdAdmin']);
  }
}
