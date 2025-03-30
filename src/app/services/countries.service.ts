import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CountryCapital } from '../models/country-capital';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private countriesCapitals: CountryCapital[] = [
    { country: 'France', capital: 'Paris' },
    { country: 'Germany', capital: 'Berlin' },
    { country: 'Italy', capital: 'Rome' },
    { country: 'Spain', capital: 'Madrid' },
    { country: 'Israel', capital: 'Jerusalem' },
  ];

  getCountriesCapitals() {
    // Simulate an API call with Observable
    return of(this.countriesCapitals);
  }
}
