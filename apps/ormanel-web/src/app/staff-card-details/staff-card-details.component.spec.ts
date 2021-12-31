import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCardDetailsComponent } from './staff-card-details.component';

describe('StaffCardDetailsComponent', () => {
  let component: StaffCardDetailsComponent;
  let fixture: ComponentFixture<StaffCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
