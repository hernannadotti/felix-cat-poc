import { Routes } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

export const routes: Routes = [
  { path: '',
    redirectTo: 'pets',
    pathMatch: 'full'
  },
  { path: 'pets',
    component: PetListComponent
  },
  { path: 'pets/:id',
    component: PetDetailsComponent
  }
];
