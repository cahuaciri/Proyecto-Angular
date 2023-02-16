import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHabilidadComponent } from './mi-habilidad.component';

describe('MiHabilidadComponent', () => {
  let component: MiHabilidadComponent;
  let fixture: ComponentFixture<MiHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
