import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadDetalleComponent } from './localidad-detalle.component';

describe('LocalidadDetalleComponent', () => {
  let component: LocalidadDetalleComponent;
  let fixture: ComponentFixture<LocalidadDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalidadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
