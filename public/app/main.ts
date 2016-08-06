import {bootstrap} from '@angular/platform-browser-dynamic';
import {BookAppComponent} from './components/book-app/book-app.component';
import { appRouterProviders } from './app.routes';

bootstrap(BookAppComponent, [
    appRouterProviders
]);
