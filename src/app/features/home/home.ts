import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TravelCollage } from '../../shared/components/travel-collage/travel-collage';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TravelCollage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
