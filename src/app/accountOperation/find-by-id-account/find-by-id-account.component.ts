import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/account-service.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-find-by-id-account',
  templateUrl: './find-by-id-account.component.html',
  styleUrls: ['./find-by-id-account.component.css']
})
export class FindByIdAccountComponent implements OnInit {

  constructor(private service:AccountServiceService,private location:Location) { }

  ngOnInit(): void {
    this.service.fetchAccountByIdFromRemote().subscribe(data=>{
      console.log(data);
    })
  }
  cancel(){
    this.location.back();
  }
}
