import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LegalsNoticeComponent } from './pages/legals-notice/legals-notice.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'art-root',
  standalone: true,
  imports: [RouterOutlet, LegalsNoticeComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Carine_Creation_Calista';
}
