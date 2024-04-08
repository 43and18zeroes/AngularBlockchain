import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockchainDataService } from '../services/blockchain-data.service';

@Component({
  selector: 'app-add-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.scss',
})
export class AddTransactionFormComponent {
  blockchain: any = [];
  addTransactionInput!: number | '';
  transactionError = false;
  transactionErrorMessage =
    'Invalid transaction input. Please enter a number greater than 0.';
  transactionInputValid = false;
  @ViewChild('addTransactionInputField') addTransactionInputField!: ElementRef;
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {
    
  }

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
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

  validateTransactionInput(input: number | ''): boolean {
    return typeof input === 'number' && input > 0;
  }

  addTransaction() {
    const lastBlockchainValue = this.getLastBlockchainValue();
    this.blockchain.push([lastBlockchainValue, this.addTransactionInput]);
    console.log('this.blockchain', this.blockchain);
    this.addTransactionInput = '';
    this.transactionInputValid = false;
    // this.backToMainMenu();
    this.userChoiceChange.emit('');
  }

  getLastBlockchainValue() {
    if (this.blockchain.length < 1) return [1];
    return this.blockchain[this.blockchain.length - 1];
  }

  setFocusToAddTransactionInputField() {
    setTimeout(() => {
      if (this.addTransactionInputField)
        this.addTransactionInputField.nativeElement.focus();
    });
  }

  // backToMainMenu() {
  //   this.userChoiceInput = ''; // Schaltet zurück zu *ngSwitchDefault
  //   this.setFocusToUserChoiceInputField();
  // }
}
