import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pages-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pages-navbar.component.html',
  styleUrl: './pages-navbar.component.scss'
})
export class PagesNavbarComponent {

}
