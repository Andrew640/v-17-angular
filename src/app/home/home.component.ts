import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';
import { DropdownSelection } from '@app/interfaces/dropdown-selection';
import { PowerGeneration } from '@app/interfaces/power-generation';
import { PieChartComponent } from '@app/pie-chart/pie-chart.component';

import { DataService } from '@app/services/data.service';
import { Observable, from } from 'rxjs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [CommonModule, PieChartComponent, FontAwesomeModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(private dataService: DataService) {}

  @Input() public dropdownSelection: DropdownSelection;

  public fromDate: string;
  public toDate: string;

  public powerGenerationData: Observable<PowerGeneration>;

  public faSpinner = faSpinner;

  ngOnInit(): void {
    this.setFromToDate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['dropdownSelection'] &&
      changes['dropdownSelection'].currentValue
    ) {
      this.setFromToDate();
    }
  }

  public updateData() {
    console.log(this.fromDate, this.toDate);
    this.powerGenerationData = this.dataService.getPowerGenerationData(
      this.fromDate,
      this.toDate
    );
  }

  private setFromToDate(): void {
    const today = new Date();
    let fromDate: Date;
    this.toDate = today.toISOString();
    switch (this.dropdownSelection) {
      case DropdownSelection.Day:
        fromDate = new Date(today);
        fromDate.setDate(fromDate.getDate() - 1);
        break;
      case DropdownSelection.Week:
        fromDate = new Date(today);
        fromDate.setDate(fromDate.getDate() - 7);
        break;
      case DropdownSelection.Month:
        fromDate = new Date(today);
        fromDate.setDate(1);
        break;
      default:
        fromDate = new Date(today);
        fromDate.setDate(fromDate.getDate() - 1);
        break;
    }
    this.fromDate = fromDate.toISOString();
    this.updateData();
  }
}
