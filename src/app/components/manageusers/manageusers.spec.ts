import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manageusers } from './manageusers';

describe('Manageusers', () => {
  let component: Manageusers;
  let fixture: ComponentFixture<Manageusers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Manageusers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manageusers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
