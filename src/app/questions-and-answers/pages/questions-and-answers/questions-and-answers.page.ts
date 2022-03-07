import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsAndAnswersService } from '../../services';


@Component({
  templateUrl: './questions-and-answers.page.html',
  providers: [QuestionsAndAnswersService],
})
export class QuestionsAndAnswersPage {

  list: {
    id: string;
    items: Array<{id: string; label: string; value: string; example: string; image?: string;}>
  };

  constructor(
    private readonly router: Router,
    private readonly questionsAndAnswersService: QuestionsAndAnswersService,
  ) {
    const navState = this.router.getCurrentNavigation()?.extras.state;
    const subjectId = (navState) ? navState['id'] : undefined;
    this.list = this.questionsAndAnswersService.getQuestionsAndAnswersBySubjectId(subjectId);
  }


  trackByFn(index: number, item: any) {
    return item.id;
  }

}
