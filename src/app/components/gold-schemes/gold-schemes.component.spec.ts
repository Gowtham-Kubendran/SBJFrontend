import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSchemesComponent } from './gold-schemes.component';

describe('GoldSchemesComponent', () => {
  let component: GoldSchemesComponent;
  let fixture: ComponentFixture<GoldSchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldSchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
