import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaxComponent } from './tax/tax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaxComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_demo';
}
