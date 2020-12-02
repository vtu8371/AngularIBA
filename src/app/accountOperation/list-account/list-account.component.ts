import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  constructor(private Location:Location) { }

  ngOnInit(): void {
  }
  goToDelete(){
    alert("Removed Successfully");
  }
  goToEdit(){
    alert("Update Successfully");
  }
  cancel(){
    this.Location.back();
  }
}
