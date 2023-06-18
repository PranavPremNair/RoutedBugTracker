import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbugComponent } from './newbug.component';

describe('NewbugComponent', () => {
  let component: NewbugComponent;
  let fixture: ComponentFixture<NewbugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbugComponent]
    });
    fixture = TestBed.createComponent(NewbugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
