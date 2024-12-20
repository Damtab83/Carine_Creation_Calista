import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'art-nav-leather',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-leather.component.html',
  styleUrl: './nav-leather.component.css',
})
export class NavLeatherComponent {}
