import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Car } from '@app/interfaces/car';
import { Chart } from 'chart.js';

@Component({
  standalone: true,
  imports: [JsonPipe],
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @Input() public carData: Car[];

  public chart: Chart;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart() {
    this.chart = new Chart('LineChart', {
      type: 'line',

      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [467, 576, 572, 79, 92, 574, 573, 576],
            backgroundColor: 'blue',
            borderColor: 'blue',
            pointBackgroundColor: 'blue',
            tension: 0.4,
          },
          {
            label: 'Profit',
            data: [542, 542, 536, 327, 17, 0.0, 538, 541],
            backgroundColor: 'limegreen',
            borderColor: 'limegreen',
            pointBackgroundColor: 'limegreen',
            tension: 0.4,
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
