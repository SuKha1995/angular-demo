import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommumnicationComponent } from './commumnication.component';

describe('CommumnicationComponent', () => {
  let component: CommumnicationComponent;
  let fixture: ComponentFixture<CommumnicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommumnicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommumnicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
