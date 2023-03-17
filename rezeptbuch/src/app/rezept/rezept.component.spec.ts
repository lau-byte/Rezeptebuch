import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptComponent } from './rezept.component';

describe('RezeptComponent', () => {
  let component: RezeptComponent;
  let fixture: ComponentFixture<RezeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
