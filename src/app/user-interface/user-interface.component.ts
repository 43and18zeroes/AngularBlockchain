import { CommonModule, NgSwitch } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-interface',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSwitch],
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.scss',
})
export class UserInterfaceComponent implements AfterViewInit {
  blockchain: any = [];
  userChoiceInput?: string;
  validUserChoiceInputs = ['1', '2', 'h', 'q']
  addTransactionInput!: number | '';
  userChoiceError = false;
  userChoiceErrorMessage = 'Invalid input. Please enter 1, 2, h, or q.';
  transactionError = false;
  transactionErrorMessage = 'Invalid transaction input. Please enter a number greater than 0.';
  transactionInputValid = false;

  @ViewChild('userChoiceInputField') userChoiceInputField!: ElementRef;
  @ViewChild('addTransactionInputField') addTransactionInputField!: ElementRef;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.backToMainMenu();
    }
  }

  ngAfterViewInit() {
    this.userChoiceInputField.nativeElement.focus();
  }

  onUserChoiceInputChange() {
    if (!this.validUserChoiceInputs.includes(this.userChoiceInput!)) {
      this.userChoiceError = true;
      this.userChoiceInputField.nativeElement.value = '';
    } else {
      this.userChoiceError = false;
      this.setFocusToAddTransactionInputField();
    }
  }

  setFocusToAddTransactionInputField() {
    setTimeout(() => {
      if (this.addTransactionInputField)
        this.addTransactionInputField.nativeElement.focus();
    });
  }

  onAddTransactionInputChange() {
    if (!this.validateTransactionInput(this.addTransactionInput)) {
      this.transactionError = true;
      this.transactionInputValid = false;
      console.log(this.transactionError);
      this.addTransactionInputField.nativeElement.focus();
      // return;
    } else {
      this.transactionError = false;
      this.transactionInputValid = true;
    }
  }

  addTransaction() {
    const lastBlockchainValue = this.getLastBlockchainValue();
    this.blockchain.push([lastBlockchainValue, this.addTransactionInput]);
    console.log('this.blockchain', this.blockchain);
    this.addTransactionInput = '';
    this.transactionInputValid = false;
    this.backToMainMenu();
  }

  validateTransactionInput(input: number | ''): boolean {
    return typeof input === 'number' && input > 0;
  }

  getLastBlockchainValue() {
    if (this.blockchain.length < 1) return [1];
    return this.blockchain[this.blockchain.length - 1];
  }

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
