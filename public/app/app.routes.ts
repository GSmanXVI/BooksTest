import { provideRouter, RouterConfig }  from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/booklist',
        pathMatch: 'full'
    },
    {
        path: 'booklist',
        component: BookListComponent
    },
    {
        path: 'book',
        component: BookComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
