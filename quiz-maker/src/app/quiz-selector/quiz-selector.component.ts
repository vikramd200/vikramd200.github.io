import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { TriviaCategories } from './trivia-categories';
import { KeyValuePipe } from '@angular/common';
import { TriviaQuestions } from './trivia-questions';
import { Router } from '@angular/router';
import { ShowResultService } from '../show-result.service';

@Component({
  selector: 'app-quiz-selector',
  templateUrl: './quiz-selector.component.html',
  styleUrls: ['./quiz-selector.component.css']
})
export class QuizSelectorComponent {
  categoryList : TriviaCategories[] = [];
  questionList : TriviaQuestions[] = [];
  buttonClick :string = "not clicked";
  showQuestions : boolean = false;
  showSubmit : boolean = false;
  feedbackMap = new Map<string, string>();
  color : string = "";
  btnId : number = -1;
  selected : number = -1;
  ansValue : string = "";

  constructor(private category:CategoryService, private router:Router, private resultService:ShowResultService){
  
  }

  ngOnInit(){
    this.category.getCategoryList().subscribe(data => { 
      Object.values(data).forEach((element) => {
        this.categoryList = Object.values(element);
      })
    })
}

onCreateButtonClick(categoryId: string, difficultyId : string){
      this.feedbackMap.clear();
      if(categoryId=='default' || difficultyId=='default'){
        alert('please select correct category and difficulty');
      } else {
        let questionList1 : TriviaQuestions[]
        this.category.getQuestions(categoryId,difficultyId).subscribe(data => {
          
          Object.values(data).forEach((element) => {
           questionList1 = Object.values(element);
            this.questionList = this.category.createTriviaQuestionsList(questionList1);
            this.showQuestions = true;
          })
        })       
      }
  }
  
  logAnswer(questionid : string, ans : string){
    this.feedbackMap.set(questionid,ans);
    console.log(this.feedbackMap);
    if(this.questionList.length == this.feedbackMap.size){
      this.showSubmit = true;
    }
  }

  getMapValue(questionid : string){
    return this.feedbackMap.get(questionid);
  }

  logValue(ansValue : string){
    this.ansValue = "Utah";
  }

  setColor(){
    this.color = 'green'
  }

  setButton(id : number){
    this.btnId = id;
  }

  setSelected(id: number){
    this.selected = id;
  }

  onsubmitQuiz(){
   let correct : number = 0;
   let incorrect : number = 0;
    console.log(this.feedbackMap);
    for(let [key,value] of this.feedbackMap){
       let question : TriviaQuestions = this.questionList.at(+key)!;
       console.log(question);
       if(question.correct_answer == value){
        correct +=1;
       } else{
        incorrect+=1;
       }
    }
    console.log("Correct count "+correct);
    console.log("incorrect count "+incorrect);
    this.resultService.setQuestionList(this.questionList);
    this.resultService.setFeedbackMap(this.feedbackMap);
    this.resultService.setScore(correct);
    this.router.navigate(['result'])
  }
  
}
