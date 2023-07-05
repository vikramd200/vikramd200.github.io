import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-grid',
  templateUrl: './quiz-grid.component.html',
  styleUrls: ['./quiz-grid.component.css']
})
export class QuizGridComponent {
  @Input() categoryId : string = "";
  @Input() difficultyId : string = "";
  
}
