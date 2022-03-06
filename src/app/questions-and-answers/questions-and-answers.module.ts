import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsAndAnswersPage } from './pages';
import { QuestionsAndAnswersRoutingModule } from './questions-and-answers-routing.module';
import { InjectedHtmlStylingPipe } from './pipes';


@NgModule({
  declarations: [
    QuestionsAndAnswersPage,
    InjectedHtmlStylingPipe
  ],
  imports: [
    CommonModule,
    QuestionsAndAnswersRoutingModule
  ],
  providers: [
    InjectedHtmlStylingPipe,
  ]
})
export class QuestionsAndAnswersModule {
}
