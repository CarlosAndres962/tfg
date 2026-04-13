import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRecluso } from './modificar-recluso';

describe('ModificarRecluso', () => {
  let component: ModificarRecluso;
  let fixture: ComponentFixture<ModificarRecluso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarRecluso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarRecluso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
