"use strict";
var router_1 = require('@angular/router');
var book_component_1 = require('./components/book/book.component');
var book_list_component_1 = require('./components/book-list/book-list.component');
var routes = [
    {
        path: '',
        redirectTo: '/booklist',
        pathMatch: 'full'
    },
    {
        path: 'booklist',
        component: book_list_component_1.BookListComponent
    },
    {
        path: 'book',
        component: book_component_1.BookComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map