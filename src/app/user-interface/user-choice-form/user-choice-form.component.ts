import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-choice-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-choice-form.component.html',
  styleUrl: './user-choice-form.component.scss'
})
export class UserChoiceFormComponent implements AfterViewInit {
  userChoiceInput?: string;
  @ViewChild('userChoiceInputField') userChoiceInputField!: ElementRef;
  userChoiceError = false;
  userChoiceErrorMessage = 'Invalid input. Please enter 1, 2, h, or q.';
  validUserChoiceInputs = ['1', '2', 'h', 'q'];

  @Output() userChoiceChange = new EventEmitter<string>();

  ngAfterViewInit() {
    this.userChoiceInputField.nativeElement.focus();
  }

  onUserChoiceInputChange() {
    if (!this.validUserChoiceInputs.includes(this.userChoiceInput!)) {
      this.userChoiceError = true;
      this.userChoiceInputField.nativeElement.value = '';
    } else {
      this.userChoiceError = false;
      this.userChoiceChange.emit(this.userChoiceInput);
      // this.setFocusToAddTransactionInputField();
    }
  }

  // setFocusToAddTransactionInputField() {
  //   setTimeout(() => {
  //     if (this.addTransactionInputField)
  //       this.addTransactionInputField.nativeElement.focus();
  //   });
  // }

  setFocusToUserChoiceInputField() {
    setTimeout(() => {
      this.userChoiceInputField.nativeElement.focus();
    });
  }

  backToMainMenu() {
    this.userChoiceInput = ''; // Schaltet zurück zu *ngSwitchDefault
    this.setFocusToUserChoiceInputField();
  }
}
