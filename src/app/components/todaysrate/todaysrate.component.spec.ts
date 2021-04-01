import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysrateComponent } from './todaysrate.component';

describe('TodaysrateComponent', () => {
  let component: TodaysrateComponent;
  let fixture: ComponentFixture<TodaysrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
