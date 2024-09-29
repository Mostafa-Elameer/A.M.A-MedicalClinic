import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallnowComponent } from './callnow.component';

describe('CallnowComponent', () => {
  let component: CallnowComponent;
  let fixture: ComponentFixture<CallnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
