import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-output-blockchain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-blockchain.component.html',
  styleUrl: './output-blockchain.component.scss'
})
export class OutputBlockchainComponent {

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.backToMainMenu();
    }
  }
  
}
