import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesNavbarComponent } from "../../../AllComponents/additionsComponents/pages-navbar/pages-navbar.component";
import { FooterComponent } from "../../../AllComponents/additionsComponents/footer/footer.component";

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [RouterOutlet, PagesNavbarComponent, FooterComponent],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss'
})
export class PagesLayoutComponent {

}
