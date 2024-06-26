import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserChoiceFormComponent } from './user-choice-form/user-choice-form.component';
import { AddTransactionFormComponent } from './add-transaction-form/add-transaction-form.component';
import { OutputBlockchainComponent } from './output-blockchain/output-blockchain.component';
import { VerifyBlockchainComponent } from './verify-blockchain/verify-blockchain.component';

@Component({
  selector: 'app-user-interface',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgSwitch,
    UserChoiceFormComponent,
    AddTransactionFormComponent,
    OutputBlockchainComponent,
    VerifyBlockchainComponent
  ],
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.scss',
})
export class UserInterfaceComponent {
  userChoiceInput: string = '';

  onUserChoiceChanged(userChoice: string) {
    this.userChoiceInput = userChoice;
  }
}
