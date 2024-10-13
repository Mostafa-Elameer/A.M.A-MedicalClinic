import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdoctorComponent } from './aboutdoctor.component';

describe('AboutdoctorComponent', () => {
  let component: AboutdoctorComponent;
  let fixture: ComponentFixture<AboutdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
