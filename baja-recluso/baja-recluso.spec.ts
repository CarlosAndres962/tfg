import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaRecluso } from './baja-recluso';

describe('BajaRecluso', () => {
  let component: BajaRecluso;
  let fixture: ComponentFixture<BajaRecluso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaRecluso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaRecluso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
