import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollGroupModalComponent } from './enroll-group-modal.component';

describe('EnrollGroupModalComponent', () => {
  let component: EnrollGroupModalComponent;
  let fixture: ComponentFixture<EnrollGroupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollGroupModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
