System.register(['@angular/router', './components/book/book.component', './components/book-list/book-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, book_component_1, book_list_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_component_1_1) {
                book_component_1 = book_component_1_1;
            },
            function (book_list_component_1_1) {
                book_list_component_1 = book_list_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    component: book_list_component_1.BookListComponent
                },
                {
                    path: 'book/:id',
                    component: book_component_1.BookComponent
                }
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map