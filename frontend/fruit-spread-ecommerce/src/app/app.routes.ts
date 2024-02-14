import { PreservesComponent } from './pages/preserves/preserves.component';
import { HomeComponent } from './pages/home/home.component';
import { JamComponent } from './pages/jams/jams.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'jams', component: JamComponent}, 
    {path: 'home', component: HomeComponent},
    {path: 'preserves', component: PreservesComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
