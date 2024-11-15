import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroAleatorioComponentComponent } from './numero-aleatorio-component.component';

describe('NumeroAleatorioComponentComponent', () => {
  let component: NumeroAleatorioComponentComponent;
  let fixture: ComponentFixture<NumeroAleatorioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeroAleatorioComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeroAleatorioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
