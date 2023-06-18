import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugupdateComponent } from './bugupdate.component';

describe('BugupdateComponent', () => {
  let component: BugupdateComponent;
  let fixture: ComponentFixture<BugupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugupdateComponent]
    });
    fixture = TestBed.createComponent(BugupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
