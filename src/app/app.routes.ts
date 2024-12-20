import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LegalsNoticeComponent } from './pages/legals-notice/legals-notice.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LeatherComponent } from './pages/leather/leather.component';
import { LayoutLeatherComponent } from './layouts/layout-leather/layout-leather.component';
import { BraceletComponent } from './pages/bracelet/bracelet.component';
import { ManufacturingComponent } from './pages/manufacturing/manufacturing.component';
import { MaterialComponent } from './pages/material/material.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaintingsComponent } from './pages/paintings/paintings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Route par défaut
  { path: 'home', component: HomeComponent },
  { path: 'mentions-legales', component: LegalsNoticeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'found', component: NotFoundComponent },
  { path: 'tableaux', component: PaintingsComponent },
  {
    path: 'creation-cuir',
    component: LayoutLeatherComponent,
    children: [
      { path: '', component: LeatherComponent },
      { path: 'bracelet', component: BraceletComponent },
      { path: 'fabrication', component: ManufacturingComponent },
      { path: 'materiaux', component: MaterialComponent },
      { path: 'bourses', component: WalletComponent },
      { path: 'realisations', component: AchievementsComponent },
    ],
  },
];
