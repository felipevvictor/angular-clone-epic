import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardLabelComponent } from './big-card-label.component';

describe('BigCardLabelComponent', () => {
  let component: BigCardLabelComponent;
  let fixture: ComponentFixture<BigCardLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
