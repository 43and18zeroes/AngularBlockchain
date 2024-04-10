import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockchainDataService } from '../services/blockchain-data.service';

@Component({
  selector: 'app-user-choice-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-choice-form.component.html',
  styleUrl: './user-choice-form.component.scss'
})
export class UserChoiceFormComponent implements AfterViewInit {
  blockchain: any = [];
  userChoiceInput?: string;
  userChoiceError = false;
  validUserChoiceInputs = ['1', '2', 'h', 'p', 'q'];
  @ViewChild('userChoiceInputField') userChoiceInputField!: ElementRef;
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
  }

  ngAfterViewInit() {
    this.userChoiceInputField.nativeElement.focus();
  }

  onUserChoiceInputChange() {
    if (!this.validUserChoiceInputs.includes(this.userChoiceInput!)) {
      this.userChoiceError = true;
    }
    else if (this.userChoiceInput === 'p') {
      this.populateBlockchain();
      this.userChoiceInputField.nativeElement.value = '';
      return;
    }
    else {
      this.userChoiceError = false;
      this.userChoiceChange.emit(this.userChoiceInput);
    }
    this.userChoiceInputField.nativeElement.value = '';
  }

  populateBlockchain() {
    for (let generatedTransaction = 5; generatedTransaction < 25; generatedTransaction += 5) {
      let lastBlockchainValue;
      if (this.blockchain.length < 1) lastBlockchainValue = [1];
      else lastBlockchainValue = this.blockchain[this.blockchain.length - 1];
      this.blockchain.push([lastBlockchainValue, generatedTransaction]);
    }
  }
}
