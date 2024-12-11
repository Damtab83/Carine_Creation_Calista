import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LegalsNoticeComponent } from './pages/legals-notice/legals-notice.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LeatherComponent } from './pages/leather/leather.component';
import { NavLeatherComponent } from './layouts/nav-leather/nav-leather.component';

@Component({
  selector: 'art-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LegalsNoticeComponent,
    HomeComponent,
    ContactComponent,
    NavLeatherComponent,
    LeatherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Carine_Creation_Calista';
}
