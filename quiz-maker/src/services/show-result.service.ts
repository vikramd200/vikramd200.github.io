import { Injectable } from '@angular/core';
import { TriviaQuestions } from '../app/quiz-selector/trivia-questions';

@Injectable({
  providedIn: 'root'
})
export class ShowResultService {

  questionList : TriviaQuestions[] = [];
  feedbackMap = new Map<string, string>();
  score : number = 0;

  constructor() { }

  setQuestionList(questionList : TriviaQuestions[]) : void{
    this.questionList = questionList;
  }

  getQuestionList() :  TriviaQuestions[]{
    return this.questionList;
  }

  setFeedbackMap(feedbackMap : Map<string,string>) : void{
    this.feedbackMap = feedbackMap;
  }
  
  getFeedBackMap() : Map<string,string>{
    return this.feedbackMap;
  }

  setScore(score:number) :void{
    this.score = score;
  }

  getScore() : number{
    return this.score;
  }



}
