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
    switch(this.userChoiceInput) {
      case 'p':
        this.populateBlockchain();
        break;
      // Fügen Sie hier Fälle für andere Eingaben hinzu
      default:
        this.userChoiceChange.emit(this.userChoiceInput);
    }
    this.userChoiceInput = ''; // Setzen Sie das Eingabefeld zurück
    this.userChoiceError = !this.validUserChoiceInputs.includes(this.userChoiceInput);
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
