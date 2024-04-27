import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDiRicercaComponent } from './barra-di-ricerca.component';

describe('BarraDiRicercaComponent', () => {
  let component: BarraDiRicercaComponent;
  let fixture: ComponentFixture<BarraDiRicercaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraDiRicercaComponent]
    });
    fixture = TestBed.createComponent(BarraDiRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
