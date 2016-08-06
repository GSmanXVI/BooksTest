import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'book-app',
    templateUrl: 'app/components/book-app/book-app.component.html',
    styleUrls: ['app/components/book-app/book-app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class BookAppComponent {

    constructor() {

    }

}
