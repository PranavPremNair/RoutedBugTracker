import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugcreationComponent } from './bugcreation.component';

describe('BugcreationComponent', () => {
  let component: BugcreationComponent;
  let fixture: ComponentFixture<BugcreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugcreationComponent]
    });
    fixture = TestBed.createComponent(BugcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
