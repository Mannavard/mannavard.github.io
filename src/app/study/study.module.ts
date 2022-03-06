import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyPage } from './pages';
import { StudyRoutingModule } from './study-routing.module';
import { StudySubjectBlockComponent } from './components';


@NgModule({
  declarations: [
    StudySubjectBlockComponent,
    StudyPage
  ],
  imports: [
    CommonModule,
    StudyRoutingModule
  ]
})
export class StudyModule { }
