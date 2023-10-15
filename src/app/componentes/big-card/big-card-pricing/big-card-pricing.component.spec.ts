import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardPricingComponent } from './big-card-pricing.component';

describe('BigCardPricingComponent', () => {
  let component: BigCardPricingComponent;
  let fixture: ComponentFixture<BigCardPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
