import { Component } from '@angular/core';
import { ShowResultService } from '../show-result.service';
import { TriviaQuestions } from '../quiz-selector/trivia-questions';
import { Router } from '@angular/router';
import { QuizSelectorComponent } from '../quiz-selector/quiz-selector.component';

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
      console.log(this.showResult);
    }
    console.log(this.feedbackMap);
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

  getMapValue(questionid : string){
    let userSelectedans = this.feedbackMap.get(questionid);
    let correct_answer  = this.questionList.at(parseInt(questionid))?.correct_answer;


    if(userSelectedans == correct_answer){
      return correct_answer;
    }else{
      return "";
    }
  }

  checkIncorrectanswer(questionid : string){
    let userSelectedans = this.feedbackMap.get(questionid);
    let correct_answer  = this.questionList.at(parseInt(questionid))?.correct_answer;

    if(userSelectedans != correct_answer){
      return userSelectedans;
    }else{
      return "";
    }
  }

  getcorrectanswer(questionid : string){
    let correct_answer  = this.questionList.at(parseInt(questionid))?.correct_answer;
    return correct_answer;
  }


  getIncorrectanswer(questionid : string) : string {
    return "Utah";
  }
}
