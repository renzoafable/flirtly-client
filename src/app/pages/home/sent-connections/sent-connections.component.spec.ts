import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentConnectionsComponent } from './sent-connections.component';

describe('SentConnectionsComponent', () => {
  let component: SentConnectionsComponent;
  let fixture: ComponentFixture<SentConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
