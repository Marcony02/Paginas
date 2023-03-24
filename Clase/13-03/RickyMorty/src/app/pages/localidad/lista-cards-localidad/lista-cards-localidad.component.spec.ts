import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardsLocalidadComponent } from './lista-cards-localidad.component';

describe('ListaCardsLocalidadComponent', () => {
  let component: ListaCardsLocalidadComponent;
  let fixture: ComponentFixture<ListaCardsLocalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCardsLocalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCardsLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
