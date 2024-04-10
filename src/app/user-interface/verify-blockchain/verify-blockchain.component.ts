import { AfterViewInit, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { BlockchainDataService } from '../services/blockchain-data.service';

@Component({
  selector: 'app-verify-blockchain',
  standalone: true,
  imports: [],
  templateUrl: './verify-blockchain.component.html',
  styleUrl: './verify-blockchain.component.scss'
})
export class VerifyBlockchainComponent implements AfterViewInit {
  blockchain: any = [];
  @Output() userChoiceChange = new EventEmitter<string>();

  constructor(private blockchainDataService: BlockchainDataService) {}

  ngOnInit() {
    this.blockchain = this.blockchainDataService.blockchain;
  }

  ngAfterViewInit(): void {
    this.hackBlockchain();
  }

  hackBlockchain() {
    this.displayBlockchainBeforeHack();
    this.blockchain[0] = [2];
    this.displayBlockchainAfterHack();
  }

  displayBlockchainBeforeHack() {

  }

  displayBlockchainAfterHack() {
    
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
