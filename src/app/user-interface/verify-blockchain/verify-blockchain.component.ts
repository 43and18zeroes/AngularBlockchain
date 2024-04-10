import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-verify-blockchain',
  standalone: true,
  imports: [],
  templateUrl: './verify-blockchain.component.html',
  styleUrl: './verify-blockchain.component.scss'
})
export class VerifyBlockchainComponent {
  @Output() userChoiceChange = new EventEmitter<string>();

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
