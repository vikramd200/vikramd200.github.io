import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TriviaCategories } from '../app/quiz-selector/trivia-categories';
import { Observable } from 'rxjs/internal/Observable';
import { TriviaQuestions } from '../app/quiz-selector/trivia-questions';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}

  getCategoryList(){
    let url : string = "https://opentdb.com/api_category.php";
    return this.http.get(url);
  }

  getQuestions(category: string, difficulty : string){
    let url : string = "https://opentdb.com/api.php?";
    let queryParams = new HttpParams();
    queryParams = queryParams.append("amount","5");
    queryParams = queryParams.append("category",category);
    queryParams = queryParams.append("difficulty",difficulty);
    queryParams = queryParams.append("type","multiple");

    return this.http.get(url,{params : queryParams});
  }

  createTriviaQuestionsList(quesList: TriviaQuestions[]) : TriviaQuestions[]{
    quesList.forEach((ques) =>{
      ques.options = ques.incorrect_answers;
      ques.options.push(ques.correct_answer);
    })
    return this.scrambleAnswerList(quesList); 
  }

  scrambleAnswerList(quesList: TriviaQuestions[]) : TriviaQuestions[]{
    quesList.forEach((ques) =>{
     let optionList : string[] = ques.options;
     for(let i = optionList.length-1 ; i>0 ; i--){
       const j = Math.floor(Math.random()*(i+1));
      [optionList[i],optionList[j]] = [optionList[j],optionList[i]];
     }
     ques.options = optionList;
    })
    return quesList;
  }

  

}
