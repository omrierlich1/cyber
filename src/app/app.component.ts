import { Component } from '@angular/core';
import {CountryMatchComponent} from './components/country-match/country-match.component';

@Component({
  selector: 'app-root',
  imports: [CountryMatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'cyber';
}
