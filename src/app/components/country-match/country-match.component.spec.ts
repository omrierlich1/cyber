import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryMatchComponent } from './country-match.component';
import { CountriesService } from '../../services/countries.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('CountryMatchComponent', () => {
  let component: CountryMatchComponent;
  let fixture: ComponentFixture<CountryMatchComponent>;
  let countriesServiceMock: jasmine.SpyObj<CountriesService>;

  beforeEach(() => {
    // Create a mock CountriesService
    countriesServiceMock = jasmine.createSpyObj('CountriesService', ['getCountriesCapitals']);
    countriesServiceMock.getCountriesCapitals.and.returnValue(of([
      { country: 'Country1', capital: 'Capital1', isCorrect: false },
      { country: 'Country2', capital: 'Capital2', isCorrect: false },
    ]));

    // Set up the testing module
    TestBed.configureTestingModule({
      imports: [CountryMatchComponent, CommonModule, FormsModule], // Import the standalone component here
      providers: [
        { provide: CountriesService, useValue: countriesServiceMock }
      ]
    }).compileComponents();

    // Create the component and inject the service
    fixture = TestBed.createComponent(CountryMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should shuffle capitals', () => {
    expect(component.capitals().length).toEqual(component.countries().length);
  });

  it('should validate correct selections', () => {
    const country = component.countries()[0];
    component.selectCapital(country, country.capital);
    const updatedCountry = component.countries().find(item => item.country === country.country)
    expect(updatedCountry!.isCorrect).toBeTrue();
  });

  it('should validate incorrect selections', () => {
    const country = component.countries()[0];
    component.selectCapital(country, 'Wrong Capital');
    expect(country.isCorrect).toBeFalse();
  });
});
