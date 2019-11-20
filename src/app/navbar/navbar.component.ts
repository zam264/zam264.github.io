import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    navbarOpen: boolean = false;

    navbarLinks = [
        {text:'Home', link:'/home'}, 
        {text:'About me', link:'/aboutme'}, 
        {text:'Resume', link:'/resume'},
        {text:'Fizzbuzz', link:'/fizzbuzz'}
    ]

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  }
