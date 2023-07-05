import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizSelectorComponent } from './quiz-selector/quiz-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { QuizGridComponent } from './quiz-grid/quiz-grid.component';

const routes : Routes = [
  {path: 'quiz-selector', component:QuizSelectorComponent},
  {path : 'result',component:ResultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuizSelectorComponent,
    ResultComponent,
    QuizGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports :[RouterModule]
})
export class AppModule { }
