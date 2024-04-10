import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-verify-blockchain',
  standalone: true,
  imports: [],
  templateUrl: './verify-blockchain.component.html',
  styleUrl: './verify-blockchain.component.scss'
})
export class VerifyBlockchainComponent {
  @Output() userChoiceChange = new EventEmitter<string>();
}
