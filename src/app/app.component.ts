import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Calculator } from './calculator';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-testing-services';

  ngOnInit(): void {
    const calculator = new Calculator();
    const rta = calculator.multiply(3, 3);
  }
}
