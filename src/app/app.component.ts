import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '@app/home/home.component';
import { DropdownSelection } from '@app/interfaces/dropdown-selection';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'v-17';

  public dropdownValues: DropdownSelection[] = [
    DropdownSelection.Day,
    DropdownSelection.Week,
    DropdownSelection.Month,
  ];

  public dropdownSelection: DropdownSelection = DropdownSelection.Day;
  public dropdownForm: FormGroup = new FormGroup({
    dropdown: new FormControl(this.dropdownSelection),
  });

  public onDropdownChange() {
    this.dropdownSelection = this.dropdownForm.value.dropdown;
  }
}
