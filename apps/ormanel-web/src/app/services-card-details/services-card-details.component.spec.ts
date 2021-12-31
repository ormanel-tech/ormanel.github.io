import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCardDetailsComponent } from './services-card-details.component';

describe('ServicesCardDetailsComponent', () => {
  let component: ServicesCardDetailsComponent;
  let fixture: ComponentFixture<ServicesCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
