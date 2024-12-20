import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input()
  showBackgroundData!: boolean;

  ngOnInit(): void {

  }

  constructor(private router:Router){}

  

  goToBlog(){
    this.router.navigate(['/blog'])
  }

  goToContact(){
    this.router.navigate(['/contact'])
  }

  goToAbout(){
    this.router.navigate(['/about'])
  }

  goToHome(){
    this.router.navigate(['/'])
  }
}
