import { Injectable } from '@angular/core';
import { TriviaQuestions } from './quiz-selector/trivia-questions';

@Injectable({
  providedIn: 'root'
})
export class ShowResultService {

  questionList : TriviaQuestions[] = [];
  feedbackMap = new Map<string, string>();
  score : number = 0;

  constructor() { }

  setQuestionList(questionList : TriviaQuestions[]){
    this.questionList = questionList;
    console.log(this.getQuestionList());
  }

  getQuestionList() :  TriviaQuestions[]{
    return this.questionList;
  }

  setFeedbackMap(feedbackMap : Map<string,string>){
    this.feedbackMap = feedbackMap;
  }
  
  getFeedBackMap() : Map<string,string>{
    return this.feedbackMap;
  }

  setScore(score:number){
    this.score = score;
  }

  getScore() : number{
    return this.score;
  }



}
