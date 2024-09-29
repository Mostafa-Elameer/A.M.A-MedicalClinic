import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrchComponent } from './atrch.component';

describe('AtrchComponent', () => {
  let component: AtrchComponent;
  let fixture: ComponentFixture<AtrchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtrchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtrchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
