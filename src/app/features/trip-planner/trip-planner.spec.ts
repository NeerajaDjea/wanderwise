import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripPlanner } from './trip-planner';

describe('TripPlanner', () => {
  let component: TripPlanner;
  let fixture: ComponentFixture<TripPlanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripPlanner],
    }).compileComponents();

    fixture = TestBed.createComponent(TripPlanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
