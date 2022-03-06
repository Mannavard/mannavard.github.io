import { Component } from '@angular/core';

import { StudySubject } from '../../structures';
import { STUDY_SUBJECTS } from '../../constants';


@Component({
  templateUrl: './study.page.html',
})
export class StudyPage {

  subjects: Array<StudySubject>;


  constructor() {
    this.subjects = STUDY_SUBJECTS;
  }

  trackById(index: number, item: StudySubject) {
    return item.id
  }

}
