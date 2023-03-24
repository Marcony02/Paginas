import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosDetalleComponent } from './episodios-detalle.component';

describe('EpisodiosDetalleComponent', () => {
  let component: EpisodiosDetalleComponent;
  let fixture: ComponentFixture<EpisodiosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodiosDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodiosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
