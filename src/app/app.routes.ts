import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';
import { MainContentComponent } from '../components/main-content/main-content.component';

export const  routes: Routes = [
    {
      path: '',
      component: MainContentComponent,
      children: [
        // { path: '', component:  },
      ]
    }
  ];

