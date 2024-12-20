import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavLeatherComponent } from '../nav-leather/nav-leather.component';

@Component({
  selector: 'art-header',
  standalone: true,
  imports: [RouterModule, NavLeatherComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // Affiche la navbar secondaire uniquement pour la route "/section" et ses enfants
  isSectionRoute(): boolean {
    return this.router.url.startsWith('/creation-cuir');
  }
}
