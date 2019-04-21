import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcBmiService {

  constructor() { }

  public calcBmi(weigth: number, height: number): number {
    if (this.validation(weigth, height)) {
      return weigth / (height * height);
    }
    else return 0;
  }

  validation(weigth, height) {
    return !isNaN(weigth) && !isNaN(height);
  }
}
