import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatshappComponent } from './watshapp.component';

describe('WatshappComponent', () => {
  let component: WatshappComponent;
  let fixture: ComponentFixture<WatshappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatshappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatshappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
