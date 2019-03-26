import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGraphComponent } from './live-graph.component';

describe('LiveGraphComponent', () => {
  let component: LiveGraphComponent;
  let fixture: ComponentFixture<LiveGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
