import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lenguajes } from './lenguajes';

describe('Lenguajes', () => {
  let component: Lenguajes;
  let fixture: ComponentFixture<Lenguajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lenguajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lenguajes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
