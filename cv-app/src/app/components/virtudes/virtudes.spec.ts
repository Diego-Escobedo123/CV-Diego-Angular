import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Virtudes } from './virtudes';

describe('Virtudes', () => {
  let component: Virtudes;
  let fixture: ComponentFixture<Virtudes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Virtudes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Virtudes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
