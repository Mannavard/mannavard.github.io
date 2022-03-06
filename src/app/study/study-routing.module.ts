import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyPage } from './pages';


const routes: Routes = [
  {
    path: '',
    component: StudyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule {
}
