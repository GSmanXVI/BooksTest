import { provideRouter, RouterConfig }  from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: RouterConfig = [
    {
        path: '',
        component: BookListComponent
    },
    {
        path: 'book/:id',
        component: BookComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
