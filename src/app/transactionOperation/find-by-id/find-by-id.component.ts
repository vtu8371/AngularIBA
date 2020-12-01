import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-by-id',
  templateUrl: './find-by-id.component.html',
  styleUrls: ['./find-by-id.component.css']
})
export class FindByIdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert("It Seems not yet Integrated with backend");
  }
  getValue(data:any){
    console.log(data);
  }
}
