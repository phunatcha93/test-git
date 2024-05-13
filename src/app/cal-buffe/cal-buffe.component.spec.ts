import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalBuffeComponent } from './cal-buffe.component';

describe('CalBuffeComponent', () => {
  let component: CalBuffeComponent;
  let fixture: ComponentFixture<CalBuffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalBuffeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalBuffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
