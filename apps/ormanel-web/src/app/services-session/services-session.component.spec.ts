import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSessionComponent } from './services-session.component';

describe('ServicesSessionComponent', () => {
  let component: ServicesSessionComponent;
  let fixture: ComponentFixture<ServicesSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
