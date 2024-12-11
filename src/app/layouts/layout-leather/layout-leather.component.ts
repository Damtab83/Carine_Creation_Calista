import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLeatherComponent } from '../nav-leather/nav-leather.component';

@Component({
  selector: 'art-layout-leather',
  standalone: true,
  imports: [RouterOutlet, NavLeatherComponent],
  templateUrl: './layout-leather.component.html',
  styleUrl: './layout-leather.component.css',
})
export class LayoutLeatherComponent {}
