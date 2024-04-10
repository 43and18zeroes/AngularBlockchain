import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { BlockchainDataService } from '../services/blockchain-data.service';

@Component({
  selector: 'app-output-blockchain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-blockchain.component.html',
  styleUrl: './output-blockchain.component.scss',
})
export class OutputBlockchainComponent {
  blockchain: any = [];
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
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
