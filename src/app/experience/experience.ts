import { Component } from '@angular/core';
import { Carousel } from '../components/carousel/carousel';
import { MediaItem } from '../components/carousel/carousel';

@Component({
  selector: 'app-experience',
  imports: [Carousel],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  cspireMedia: MediaItem[] = [
    {
      type: 'image',
      src: 'assets/cspire/catalog.png',
      alt: 'E-Commerce Dashboard',
    },
    {
      type: 'image',
      src: 'assets/cspire/device-activate.png',
      alt: 'Device Activation Flow',
    },
  ];

  troyMedia: MediaItem[] = [
    {
      type: 'image',
      src: 'assets/troy/login.png',
      alt: 'Web Login Page',
    },
    {
      type: 'image',
      src: 'assets/troy/dashboard.png',
      alt: 'Web Dashboard',
    },
    {
      type: 'image',
      src: 'assets/troy/calendar.png',
      alt: 'Web Calendar',
    },
    {
      type: 'image',
      src: 'assets/troy/login-mobile.png',
      alt: 'Mobile Login Page',
    },
    {
      type: 'image',
      src: 'assets/troy/signup.png',
      alt: 'Mobile Signup Page',
    },
    {
      type: 'image',
      src: 'assets/troy/home.png',
      alt: 'Mobile Home Page',
    },
    {
      type: 'image',
      src: 'assets/troy/payment.png',
      alt: 'Mobile Payment Page',
    },
    {
      type: 'image',
      src: 'assets/troy/ticket.png',
      alt: 'Mobile Ticket Page',
    },
  ];

  shopeeMedia: MediaItem[] = [
    {
      type: 'image',
      src: 'assets/shopee/image.png',
      alt: 'Shopee Logo',
    },
    {
      type: 'image',
      src: 'assets/shopee/home.png',
      alt: 'Shopee Home Page',
    }
  ]
}
