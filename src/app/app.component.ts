import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 600,
    stepsArray: this.getStepsArray(),
    showTicks: true,
    getLegend: (value: number) => {
      if (value === 10) {
        return '10';
      }
      return null;
    },
  };

  getStepsArray() {
    const arr = [];
    for (let i = 0; i < 660; i++) {
      arr.push({
        value: i + 1,
        legend: `${i + 1}`,
      });
    }
    return arr;
  }

  getLegend;
}
