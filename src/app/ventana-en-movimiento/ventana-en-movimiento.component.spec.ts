import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaEnMovimientoComponent } from './ventana-en-movimiento.component';

describe('VentanaEnMovimientoComponent', () => {
  let component: VentanaEnMovimientoComponent;
  let fixture: ComponentFixture<VentanaEnMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaEnMovimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaEnMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
