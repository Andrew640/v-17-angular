import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  GenerationMix,
  PowerGeneration,
} from '@app/interfaces/power-generation';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  standalone: true,
  selector: 'app-pie-chart',
  imports: [ChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnChanges {
  @Input() public powerGeneration: PowerGeneration;
  public chart: Highcharts.Chart;

  Highcharts: typeof Highcharts = Highcharts;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['powerGeneration'] && changes['powerGeneration'].currentValue) {
      this.createChart();
    }
  }

  public createChart() {
    Highcharts.chart('chart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{point.percentage:.1f}%',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>',
          },
        },
      },
      series: [
        {
          type: 'pie',
          data: this.powerGeneration.data[0].generationmix.map(
            (data: GenerationMix) => [data.fuel, data.perc]
          ),
          dataLabels: [
            {
              enabled: true,
              format: '{point.percentage:.1f} %',
              distance: -50,
              filter: {
                property: 'percentage',
                operator: '>',
                value: 4,
              },
            },
            {
              enabled: true,
              format: '<b>{point.name}</b>',
              connectorColor: 'silver',
              style: {
                fontWeight: 'bold',
                color: 'black',
              },
            },
          ],
        },
      ],
    });
  }
}
