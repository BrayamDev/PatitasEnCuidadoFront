import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnimalComponent } from './tipo-animal.component';

describe('TipoAnimalComponent', () => {
  let component: TipoAnimalComponent;
  let fixture: ComponentFixture<TipoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoAnimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
