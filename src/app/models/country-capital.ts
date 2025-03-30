export interface CountryCapital {
  country: string;
  capital: string;
  selectedCapital?: string;
  isCorrect?: boolean | null; // explicitly track correctness
}
