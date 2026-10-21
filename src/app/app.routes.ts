import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { List } from './list/list';
import { Management } from './management/management';
import { Page404 } from './page404/page404';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'list', component: List },
    { path: 'management', component: Management },
    { path: 'page404', component: Page404 },
    { path: '**', redirectTo: 'page404' }
];
