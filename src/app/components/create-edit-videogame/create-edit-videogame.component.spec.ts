import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditVideogameComponent } from './create-edit-videogame.component';

describe('CreateEditVideogameComponent', () => {
  let component: CreateEditVideogameComponent;
  let fixture: ComponentFixture<CreateEditVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditVideogameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
