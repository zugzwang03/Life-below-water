import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AcquaticLifeComponent } from './acquatic-life/acquatic-life.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'explore', component: AcquaticLifeComponent}
];
