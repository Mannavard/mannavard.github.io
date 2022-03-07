import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'study',
    pathMatch: 'full',
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path: 'study',
    loadChildren: () => import('./study/study.module').then(m => m.StudyModule)
  },
  {
    path: 'questions-and-answers',
    loadChildren: () => import('./questions-and-answers/questions-and-answers.module').then(m => m.QuestionsAndAnswersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
