import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoEventComponent } from './pseudo-event.component';

describe('PseudoEventComponent', () => {
  let component: PseudoEventComponent;
  let fixture: ComponentFixture<PseudoEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
