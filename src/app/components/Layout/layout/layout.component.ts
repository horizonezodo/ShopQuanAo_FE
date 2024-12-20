import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule  } from '@angular/router';
import { HeaderComponent } from "../../Header/header/header.component";
import { FooterComponent } from "../../Footer/footer/footer.component";
import { CommonModule } from '@angular/common';
import { SlideComponent } from "../../slide/slide.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule, SlideComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  standalone: true,
})
export class LayoutComponent {
    showHeaderFooter: boolean = false;
    showSlide: boolean = false;
    showBackground:boolean = false;

    private routesWithHeaderFooter: string[] = [
      '/',
      '/user',
      '/admin',
      '/blog',
      '/about',
      '/contact'
    ];

    private routerWithSlide: string[] = [
      '/',
      '/user'
    ];

    private routesWithBackground: string[] = [
      '/user',
      '/admin',
      '/blog',
      '/about',
      '/contact'
    ];

    constructor(private router: Router){
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.showHeaderFooter = this.routesWithHeaderFooter.includes(event.url);
          this.showSlide = this.routerWithSlide.includes(event.url);
          this.showBackground =  this.routesWithBackground.includes(event.url);
        }
      });
    }
}
