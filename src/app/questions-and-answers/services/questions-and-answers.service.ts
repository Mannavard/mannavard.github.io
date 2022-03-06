import { Injectable } from '@angular/core';

import { QAA_DATA } from '../constants';

@Injectable()
export class QuestionsAndAnswersService {

  constructor() {
  }


  getQuestionsAndAnswersBySubjectId(id: string) {
    const questionsAndAnswers: Array<any> = QAA_DATA;

    return questionsAndAnswers.find(item => {
      return (item.id === id);
    })
  }
}
