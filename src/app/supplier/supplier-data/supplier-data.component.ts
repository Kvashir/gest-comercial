import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-supplier-data',
  templateUrl: './supplier-data.component.html',
  styleUrls: ['./supplier-data.component.scss']
})
export class SupplierDataComponent implements OnInit {
id!:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.id = params.id;
    })
    
  }
}
