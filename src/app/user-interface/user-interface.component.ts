import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-interface',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.scss'
})
export class UserInterfaceComponent implements AfterViewInit {
  userInput?: number;
  @ViewChild('inputField') inputField!: ElementRef;

  ngAfterViewInit() {
    this.inputField.nativeElement.focus();
  }

  onInputChange() {
    console.log("User input changed to: ", this.userInput);
  }
}
