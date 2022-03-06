import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsAndAnswersPage } from './pages';


const routes: Routes = [{path: '', component: QuestionsAndAnswersPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsAndAnswersRoutingModule {
}
