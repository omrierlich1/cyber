import {Component, OnInit, computed, signal, inject, ChangeDetectionStrategy} from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import {CountryCapital} from '../../models/country-capital';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  standalone:true,
  selector: 'app-country-match',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './country-match.component.html',
  styleUrls: ['./country-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryMatchComponent {
  countries = signal<CountryCapital[]>([]);
  capitals = signal<string[]>([]);

  countriesService: CountriesService = inject(CountriesService);

  correctAnswers = computed(()=>{
    return this.countries().filter(country => country.isCorrect).length;
  })

  constructor() {
    this.countriesService.getCountriesCapitals().pipe(
      takeUntilDestroyed()
    ).subscribe((data) => {
      this.countries.set(data);
      this.capitals.set(this.countries().map((c) => c.capital));
    });
  }
  selectCapital(country:CountryCapital, capital:string){
    this.countries.update((items)=>
      items.map((item)=>
        item.country === country.country ? {
          ...item,
          selectedCapital: capital,
          isCorrect: item.capital === capital
        } : item
      )
    )
  }
}
