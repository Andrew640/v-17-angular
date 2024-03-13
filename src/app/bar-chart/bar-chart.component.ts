import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Car } from '@app/interfaces/car';
import Chart from 'chart.js/auto';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges {
  @Input() public carData: Car[];
  public chart: Chart;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['carData'] && changes['carData'].currentValue) {
      this.createChart();
    }
  }

  public createChart() {
    console.log(this.carData);
    this.chart = new Chart('BarChart', {
      type: 'bar',

      data: {
        // values on X-Axis
        labels: this.carData.map((car: Car) => `${car.make} ${car.model}`),
        datasets: [
          {
            label: 'Price',
            data: this.carData.map((car: Car) => car.price),
            backgroundColor: 'blue',
          },
          {
            label: 'Test',
            data: [542, 542, 536, 327, 17, 0.0, 538, 541],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}
