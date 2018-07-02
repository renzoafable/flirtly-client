import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchfinderComponent } from './matchfinder.component';

describe('MatchfinderComponent', () => {
  let component: MatchfinderComponent;
  let fixture: ComponentFixture<MatchfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
