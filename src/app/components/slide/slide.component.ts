import { Component } from '@angular/core';
import { speed } from 'jquery';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slide',
  imports: [SlickCarouselModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  slideConfig = { 
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    autoplay: true, 
    autoplaySpeed: 2000,
    infinity: true,
    speed: 300
  };
}
