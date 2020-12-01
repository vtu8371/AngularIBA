import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internetBankingApplication';
  checker:string="";
  parentComponent(data:any){
    this.checker=data;
  }
  input:string="notShow";
}
