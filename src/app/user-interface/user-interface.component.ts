import { CommonModule, NgSwitch } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  addTransactionInput!: number | '';
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
    this.setFocusToAddTransactionInputField();
  }

  setFocusToAddTransactionInputField() {
    setTimeout(() => {
      if (this.addTransactionInputField)
        this.addTransactionInputField.nativeElement.focus();
    });
  }

  addTransaction() {
    console.log('User input changed to: ', this.addTransactionInput);
    const lastBlockchainValue = this.getLastBlockchainValue();
    this.blockchain.push([lastBlockchainValue, this.addTransactionInput]);
    console.log('this.blockchain', this.blockchain);
    this.addTransactionInput = '';
    this.userChoiceInput = ''; // switches back to *ngSwitchDefault

    this.setFocusToUserChoiceInputField();
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
