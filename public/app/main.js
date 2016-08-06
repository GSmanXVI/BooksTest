System.register(['@angular/platform-browser-dynamic', './components/book-app/book-app.component', './app.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, book_app_component_1, app_routes_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (book_app_component_1_1) {
                book_app_component_1 = book_app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(book_app_component_1.BookAppComponent, [
                app_routes_1.appRouterProviders
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map