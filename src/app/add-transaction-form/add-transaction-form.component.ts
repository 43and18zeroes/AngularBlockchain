import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.scss',
})
export class AddTransactionFormComponent {
  addTransactionInput!: number | '';
  transactionError = false;
  transactionErrorMessage =
    'Invalid transaction input. Please enter a number greater than 0.';
  transactionInputValid = false;
  @ViewChild('addTransactionInputField') addTransactionInputField!: ElementRef;

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

  validateTransactionInput(input: number | ''): boolean {
    return typeof input === 'number' && input > 0;
  }

  addTransaction() {
    const lastBlockchainValue = this.getLastBlockchainValue();
    this.blockchain.push([lastBlockchainValue, this.addTransactionInput]);
    console.log('this.blockchain', this.blockchain);
    this.addTransactionInput = '';
    this.transactionInputValid = false;
    this.backToMainMenu();
  }

  getLastBlockchainValue() {
    if (this.blockchain.length < 1) return [1];
    return this.blockchain[this.blockchain.length - 1];
  }

  backToMainMenu() {
    this.userChoiceInput = ''; // Schaltet zurück zu *ngSwitchDefault
    this.setFocusToUserChoiceInputField();
  }
}
