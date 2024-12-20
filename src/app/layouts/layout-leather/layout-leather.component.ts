import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLeatherComponent } from '../nav-leather/nav-leather.component';
import { BraceletComponent } from '../../pages/bracelet/bracelet.component';
import { ManufacturingComponent } from '../../pages/manufacturing/manufacturing.component';
import { MaterialComponent } from '../../pages/material/material.component';
import { WalletComponent } from '../../pages/wallet/wallet.component';

@Component({
  selector: 'art-layout-leather',
  standalone: true,
  imports: [
    RouterOutlet,
    NavLeatherComponent,
    BraceletComponent,
    ManufacturingComponent,
    MaterialComponent,
    WalletComponent,
  ],
  templateUrl: './layout-leather.component.html',
  styleUrl: './layout-leather.component.css',
})
export class LayoutLeatherComponent {}
