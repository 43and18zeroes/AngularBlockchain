import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { BlockchainDataService } from '../services/blockchain-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-verify-blockchain',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './verify-blockchain.component.html',
  styleUrl: './verify-blockchain.component.scss',
})
export class VerifyBlockchainComponent implements AfterViewInit {
  blockchain: any = [];
  blockchainBeforeHack: any = [];
  blockchainAfterHack: any = [];
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.hackBlockchain();
    });
  }

  hackBlockchain() {
    this.blockchainBeforeHack = [...this.blockchain];
    this.blockchain[0] = [2];
    this.blockchainAfterHack = [...this.blockchain];
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
