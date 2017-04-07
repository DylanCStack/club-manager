import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';

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
  },
  {
    path:'member/:key',
    component:ProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
