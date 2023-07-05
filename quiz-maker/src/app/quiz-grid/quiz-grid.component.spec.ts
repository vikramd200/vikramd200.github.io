import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGridComponent } from './quiz-grid.component';

describe('QuizGridComponent', () => {
  let component: QuizGridComponent;
  let fixture: ComponentFixture<QuizGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizGridComponent]
    });
    fixture = TestBed.createComponent(QuizGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
