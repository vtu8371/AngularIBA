import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  title:string="Fill The Required Details";

  cancel(){
    this.location.back();
  }
}
