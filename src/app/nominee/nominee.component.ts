import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.css']
})
export class NomineeComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  cancel(){
    this.location.back();
  }
}
