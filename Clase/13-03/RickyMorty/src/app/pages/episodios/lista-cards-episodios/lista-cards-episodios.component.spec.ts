import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardsEpisodiosComponent } from './lista-cards-episodios.component';

describe('ListaCardsEpisodiosComponent', () => {
  let component: ListaCardsEpisodiosComponent;
  let fixture: ComponentFixture<ListaCardsEpisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCardsEpisodiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCardsEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
