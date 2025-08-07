import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursedetails } from './coursedetails';

describe('Coursedetails', () => {
  let component: Coursedetails;
  let fixture: ComponentFixture<Coursedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Coursedetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursedetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
