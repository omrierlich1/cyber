import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CountryMatchComponent} from "./components/country-match/country-match.component";
import {authGuard} from "./guerds/auth.guard";

export const routes: Routes = [
	{ path:'', component: HomeComponent},
	{
		path:'match',
		component: CountryMatchComponent,
		canActivate: [authGuard]
	},
	{path:'**', redirectTo:''}
];
