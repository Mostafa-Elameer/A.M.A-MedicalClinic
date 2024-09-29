import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesAndAnswerComponent } from './ques-and-answer.component';

describe('QuesAndAnswerComponent', () => {
  let component: QuesAndAnswerComponent;
  let fixture: ComponentFixture<QuesAndAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuesAndAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuesAndAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
