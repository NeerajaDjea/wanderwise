import { Component, signal } from '@angular/core';
import { FormField, form, required, min, submit } from '@angular/forms/signals';

interface TripPreferences {
  destination: string;
  numberOfDays: number;
  budget: number;
  interests: string;
  travelStyle: string;
}

@Component({
  selector: 'app-trip-planner',
  imports: [FormField],
  templateUrl: './trip-planner.html',
  styleUrl: './trip-planner.scss',
})
export class TripPlanner {
  tripModel = signal<TripPreferences>({
    destination: '',
    numberOfDays: 3,
    budget: 1000,
    interests: '',
    travelStyle: '',
  });
  submittedTrip = signal<TripPreferences | null>(null);
  tripForm = form(this.tripModel, (fieldPath) => {
    required(fieldPath.destination, {
      message: 'Please enter a destination',
    });

    min(fieldPath.numberOfDays, 1, {
      message: 'Your trip must be at least 1 day',
    });

    min(fieldPath.budget, 1, {
      message: 'Please enter a budget greater than £0',
    });

    required(fieldPath.interests, {
      message: 'Tell us what you are interested in',
    });

    required(fieldPath.travelStyle, {
      message: 'Please choose a travel style',
    });
  });

  async onSubmit(event: Event) {
    event.preventDefault();

    await submit(this.tripForm, async () => {
      const trip = this.tripModel();

      console.log('Trip preferences:', trip);

      this.submittedTrip.set({ ...trip });
    });
  }
}
