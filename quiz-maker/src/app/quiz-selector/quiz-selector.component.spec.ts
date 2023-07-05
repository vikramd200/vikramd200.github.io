import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSelectorComponent } from './quiz-selector.component';

describe('QuizSelectorComponent', () => {
  let component: QuizSelectorComponent;
  let fixture: ComponentFixture<QuizSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizSelectorComponent]
    });
    fixture = TestBed.createComponent(QuizSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
