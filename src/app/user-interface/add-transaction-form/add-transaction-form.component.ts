import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockchainDataService } from '../services/blockchain-data.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.scss',
})
export class AddTransactionFormComponent {
  blockchain: any = [];
  addTransactionInput!: number | '';
  addTransactionFormValid = false;
  @ViewChild('addTransactionInputFieldModel') addTransactionInputFieldModel!: ElementRef;
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //   console.log(this.addTransactionInputFieldModel);
  //     this.addTransactionInputFieldModel.nativeElement.focus();
  //   }, 200);
  // }

  onAddTransactionInputChange() {
    this.addTransactionFormValid =
      this.addTransactionInput !== '' &&
      this.addTransactionInput !== null &&
      this.addTransactionInput !== 0;
  }

  addTransaction() {
    const lastBlockchainValue = this.getLastBlockchainValue();
    this.blockchain.push([lastBlockchainValue, this.addTransactionInput]);
    this.addTransactionInput = '';
    this.addTransactionFormValid = false;
    this.userChoiceChange.emit('');
  }

  getLastBlockchainValue() {
    if (this.blockchain.length < 1) return [1];
    return this.blockchain[this.blockchain.length - 1];
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.returnToUserChoice();
    }
  }

  returnToUserChoice() {
    this.userChoiceChange.emit('');
  }
}
