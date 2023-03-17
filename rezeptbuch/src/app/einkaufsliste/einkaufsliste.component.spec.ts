import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkaufslisteComponent } from './einkaufsliste.component';

describe('EinkaufslisteComponent', () => {
  let component: EinkaufslisteComponent;
  let fixture: ComponentFixture<EinkaufslisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinkaufslisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinkaufslisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
