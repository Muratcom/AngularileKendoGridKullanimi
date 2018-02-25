import { products } from './../../models/products';
import { SelectableSettings } from '@progress/kendo-angular-grid';


import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public gridData: any[] = products;

  public onSelect(e) {
console.log(e);
  }

  constructor() {

  }

  public ngOnInit(): void {

  }


}
