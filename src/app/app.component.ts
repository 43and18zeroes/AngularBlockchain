import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularBlockchain';
}
