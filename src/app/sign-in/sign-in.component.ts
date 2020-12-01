import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output() parentFunction:EventEmitter<string>=new EventEmitter()
  @Input() child:string;
  constructor() { }
  value:string="";
  onSubmit(data:any){
    console.log(data.role);
    this.parentFunction.emit(data.role);
  }

  ngOnInit(): void {
    this.parentFunction.emit("Customer");
  }
  
}
