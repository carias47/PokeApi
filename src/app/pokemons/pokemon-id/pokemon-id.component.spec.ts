import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIdComponent } from './pokemon-id.component';

describe('PokemonIdComponent', () => {
  let component: PokemonIdComponent;
  let fixture: ComponentFixture<PokemonIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
