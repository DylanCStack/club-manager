import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RosterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
