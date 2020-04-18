import { Routes } from '@angular/router';

import { FlyComponent } from '../fly/fly/fly.component';
import { CarComponent } from '../fly/car/car.component';
import { FlyCarComponent} from '../fly/fly-car/fly-car.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

export const routes :Routes = [
	{path: 'fly', component: FlyComponent},
	{path: 'fly/car', component: CarComponent},
	{path: 'fly/fly-car', component: FlyCarComponent},
	{path: '', redirectTo: '/fly', pathMatch: 'full'},
	{path: 'logovanje',component:LoginComponent },
	{path: 'registracija', component: RegistrationComponent}
	
];
