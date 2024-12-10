import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LegalsNoticeComponent } from './pages/legals-notice/legals-notice.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Route par défaut
  { path: 'home', component: HomeComponent },
  { path: 'mentions-legales', component: LegalsNoticeComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'tableaux', component: TableauxComponent },
  // { path: 'found', component: PageNotFoundComponent },
];
