import { Component, Input } from '@angular/core';

import { StudySubject } from '../../structures';
import { Router } from '@angular/router';


@Component({
  selector: 'study-subject-block',
  templateUrl: './study-subject-block.component.html',
})

export class StudySubjectBlockComponent {

  @Input() subject!: StudySubject;

  constructor(
    private readonly router: Router,
  ) {
  }


  moveToSubject() {
    this.router.navigateByUrl('/questions-and-answers', {state: {id: this.subject.id}});
  }
}
