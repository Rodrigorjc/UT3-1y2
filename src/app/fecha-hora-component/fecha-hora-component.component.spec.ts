import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaHoraComponentComponent } from './fecha-hora-component.component';

describe('FechaHoraComponentComponent', () => {
  let component: FechaHoraComponentComponent;
  let fixture: ComponentFixture<FechaHoraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FechaHoraComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechaHoraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
