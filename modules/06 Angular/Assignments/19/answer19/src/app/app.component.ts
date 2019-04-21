import { Component, OnInit } from '@angular/core';
import {CalcBmiService} from './calc-bmi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer19';

  result: number;
  isDivVisible : boolean = false;

  constructor(private calc : CalcBmiService){
    this.result = 0;
  }

  ngOnInit(){}

  calcBmiFunc(e: Event, height: number, weight: number) {
    e.preventDefault();
    this.result = this.calc.calcBmi(weight, height);
    console.log(this.result);
    this.isDivVisible = true;
  }

  
}
