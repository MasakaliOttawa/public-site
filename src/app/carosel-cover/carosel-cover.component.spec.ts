import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselCoverComponent } from './carosel-cover.component';

describe('CaroselCoverComponent', () => {
  let component: CaroselCoverComponent;
  let fixture: ComponentFixture<CaroselCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaroselCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroselCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
