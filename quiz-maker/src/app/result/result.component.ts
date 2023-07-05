import { Component } from '@angular/core';
import { ShowResultService } from '../../services/show-result.service';
import { TriviaQuestions } from '../quiz-selector/trivia-questions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  questionList : TriviaQuestions[] = [];
  feedbackMap = new Map<string, string>();
  score : number = 0;
  showResult : boolean = false;
  resultColor : string = "";

  constructor(private resultService:ShowResultService, private router:Router){}

  ngOnInit(){
    this.questionList = this.resultService.getQuestionList();
    this.feedbackMap = this.resultService.feedbackMap;
    this.score = this.resultService.score;
    this.resultColor = this.setResultcolor(this.score);
    if(this.feedbackMap.size>0){
      this.showResult = true;
    }
  }

  createNewQuiz(){
    this.router.navigate(['quizmaker']);
  }

  setResultcolor(score : number) : string{
    let color : string = "";
    if(score>4){
      color = 'green';
    } else if(score>1 && score <4){
      color = 'yellow';
    } else{
      color = 'red';
    }
    return color;
  }

  checkIncorrectanswer(questionid : string) : string{
    let userSelectedans = this.feedbackMap.get(questionid)!;
    let correct_answer  = this.questionList.at(parseInt(questionid))?.correct_answer!;
    let retValue : string = "";

    if(userSelectedans != correct_answer){
      retValue = userSelectedans;
    }
    return retValue;
  }

  getcorrectanswer(questionid : string) : string{
    let correct_answer  = this.questionList.at(parseInt(questionid))?.correct_answer!;
    return correct_answer;
  }

}
