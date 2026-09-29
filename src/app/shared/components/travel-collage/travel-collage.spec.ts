import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelCollage } from './travel-collage';

describe('TravelCollage', () => {
  let component: TravelCollage;
  let fixture: ComponentFixture<TravelCollage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelCollage],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelCollage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
