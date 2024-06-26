import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockchainDataService } from '../services/blockchain-data.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-choice-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './user-choice-form.component.html',
  styleUrl: './user-choice-form.component.scss',
})
export class UserChoiceFormComponent {
  blockchain: any = [];
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '1':
      case '!':
        this.onUserChoice('selectAddNewTransaction');
        break;
      case '2':
      case '"':
        this.onUserChoice('selectOutputBlockchainBlocks');
        break;
      case 'h':
      case 'H':
        this.onUserChoice('selectManipulateTheChain');
        break;
      case 'p':
      case 'P':
        this.populateBlockchain();
        break;
    }
  }

  onUserChoice(choice: string) {
    this.userChoiceChange.emit(choice);
  }

  populateBlockchain() {
    if (this.blockchain.length < 1) {
      for (
        let generatedTransaction = 5;
        generatedTransaction < 25;
        generatedTransaction += 5
      ) {
        let lastBlockchainValue;
        if (this.blockchain.length < 1) lastBlockchainValue = [1];
        else lastBlockchainValue = this.blockchain[this.blockchain.length - 1];
        this.blockchain.push([lastBlockchainValue, generatedTransaction]);
      }
    }
  }
}
