import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizSelectorComponent } from './quiz-selector/quiz-selector.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path : '', component:QuizSelectorComponent},
  {path : 'quizmaker', component:QuizSelectorComponent},
  {path : 'result', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
