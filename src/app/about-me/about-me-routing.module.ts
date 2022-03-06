import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMePage } from './pages';


const routes: Routes = [
  {
    path: '',
    component: AboutMePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule {
}
