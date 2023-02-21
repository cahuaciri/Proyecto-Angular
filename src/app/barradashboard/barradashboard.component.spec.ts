import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarradashboardComponent } from './barradashboard.component';

describe('BarradashboardComponent', () => {
  let component: BarradashboardComponent;
  let fixture: ComponentFixture<BarradashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarradashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarradashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
