import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockchainDataService } from '../services/blockchain-data.service';

@Component({
  selector: 'app-user-choice-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-choice-form.component.html',
  styleUrl: './user-choice-form.component.scss',
})
export class UserChoiceFormComponent {
  blockchain: any = [];
  userChoiceInput?: string;
  userChoiceError = false;
  validUserChoiceInputs = ['1', '2', 'h', 'p'];
  @ViewChild('userChoiceInputField') userChoiceInputField!: ElementRef;
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key == '1' || event.key === '!') {
      this.onAddNewTransaction();
    }
  }

  onAddNewTransaction() {
    this.userChoiceChange.emit('1');
  }

  onOutputBlockchainBlocks() {
    this.userChoiceChange.emit('2');
  }

  onManipulateTheChain() {
    this.userChoiceChange.emit('h');
  }

  // onUserChoiceInputChange() {
  //   switch(this.userChoiceInput) {
  //     case 'p':
  //       this.populateBlockchain();
  //       break;
  //     // Fügen Sie hier Fälle für andere Eingaben hinzu
  //     default:
  //       this.userChoiceChange.emit(this.userChoiceInput);
  //   }
  //   this.userChoiceInput = ''; // Setzen Sie das Eingabefeld zurück
  //   this.userChoiceError = !this.validUserChoiceInputs.includes(this.userChoiceInput);
  // }

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
