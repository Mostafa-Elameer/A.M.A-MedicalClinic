import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    animateOut:"fadeOut",
    autoplay:true,
    autoplaySpeed:1000,
    dots: false,
    navSpeed: 700,
    
    responsive: {
      0: {
        items: 1,
        animateOut:"fadeOut"

      },
      400: {
        items: 3,
        animateOut:"fadeOut"
      },
      740: {
        items: 4,
        animateOut:"fadeOut"
      },
      940: {
        items: 6,
        animateOut:"fadeOut"
      }
    },
    nav: false
  }


}
