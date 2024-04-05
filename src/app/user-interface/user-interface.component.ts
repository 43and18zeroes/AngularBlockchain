import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-interface',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.scss',
})
export class UserInterfaceComponent implements AfterViewInit {
  userChoiceInput?: string;
  addTransactionInput?: number;
  @ViewChild('userChoiceInputField') userChoiceInputField!: ElementRef;

  ngAfterViewInit() {
    this.userChoiceInputField.nativeElement.focus();
  }

  onUserChoiceInputChange() {
    console.log('User input changed to: ', this.userChoiceInput);
  }

  onAddTransactionInputChange() {}
}
