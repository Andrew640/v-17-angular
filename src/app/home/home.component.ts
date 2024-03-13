import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarChartComponent } from '@app/bar-chart/bar-chart.component';
import { Car } from '@app/interfaces/car';
import { LineChartComponent } from '@app/line-chart/line-chart.component';
import { DataService } from '@app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, BarChartComponent, LineChartComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private dataService: DataService) {}
  public carsData: Observable<Car[]> = this.dataService.getCosts();
}
