import { CommonModule, NgSwitch } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-interface',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSwitch],
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.scss',
})
export class UserInterfaceComponent implements AfterViewInit {
  blockchain: number[] = [];
  userChoiceInput?: string;
  addTransactionInput!: number;
  @ViewChild('userChoiceInputField') userChoiceInputField!: ElementRef;

  ngAfterViewInit() {
    this.userChoiceInputField.nativeElement.focus();
  }

  onUserChoiceInputChange() {
    // console.log('User input changed to: ', this.userChoiceInput);
    // switch(this.userChoiceInput) {
    //   case ('1'): {
    //   }
    // }
  }

  addTransaction() {
    console.log('User input changed to: ', this.addTransactionInput);
    // if (this.blockchain.length < 1) {

    // }
    this.blockchain.push(this.addTransactionInput);
    console.log('this.blockchain', this.blockchain);
  }
}
