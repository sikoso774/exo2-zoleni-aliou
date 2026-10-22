import { Routes } from '@angular/router';
import { Home } from './home/home';
import { List } from './list/list';
import { Management } from './management/management';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'list', component: List },
    { path: 'management', component: Management },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: 'home' }
];
