import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilesec } from './profilesec';

describe('Profilesec', () => {
  let component: Profilesec;
  let fixture: ComponentFixture<Profilesec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profilesec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profilesec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
