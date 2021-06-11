import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  id!:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.id = params.id;
    })

  }




}
