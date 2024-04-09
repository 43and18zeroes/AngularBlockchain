import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
  addTransactionFormValid = false;
  @ViewChild('addTransactionInputField') addTransactionInputField!: ElementRef;
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
  }

  ngAfterViewInit() {
    this.addTransactionInputField.nativeElement.focus();
  }

  onAddTransactionInputChange() {
    if (this.addTransactionInput !== '' ||
      this.addTransactionInput !== null ||
      this.addTransactionInput !== 0) {
      this.addTransactionFormValid = true;
    } 
    if (this.addTransactionInput === '' ||
    this.addTransactionInput === null ||
    this.addTransactionInput === 0) {
      this.addTransactionFormValid = false;
    }
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

  onBlurEvent() {
    this.userChoiceChange.emit('');
  }
}
