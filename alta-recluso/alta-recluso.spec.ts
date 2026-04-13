import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRecluso } from './alta-recluso';

describe('AltaRecluso', () => {
  let component: AltaRecluso;
  let fixture: ComponentFixture<AltaRecluso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaRecluso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaRecluso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
