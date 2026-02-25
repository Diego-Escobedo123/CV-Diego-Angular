import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEducacionCompetencia } from './tabla-educacion-competencia';

describe('TablaEducacionCompetencia', () => {
  let component: TablaEducacionCompetencia;
  let fixture: ComponentFixture<TablaEducacionCompetencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEducacionCompetencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEducacionCompetencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
