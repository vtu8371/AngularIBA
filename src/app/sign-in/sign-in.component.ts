import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output() parentFunction:EventEmitter<string>=new EventEmitter()
  @Input() child:string;
  constructor(private router: Router){
  }
  value:string="";
  onSubmit(data:any){
    console.log(data.role);
    this.parentFunction.emit(data.role);
  }

  ngOnInit(): void {
  }
  goToAdminPage(){
    this.router.navigate(['./admin']);
  }
  goToCustomerPage(){
    this.router.navigate(['./customer']);
  }
}
