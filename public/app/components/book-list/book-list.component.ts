import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ResponsiveImgDirective} from '../../directives/responsive-img.directive';

@Component({
  selector: 'book-list',
  templateUrl: 'app/components/book-list/book-list.component.html',
  styleUrls: ['app/components/book-list/book-list.component.css'],
  directives: [ROUTER_DIRECTIVES, ResponsiveImgDirective]
})
export class BookListComponent {
    constructor() {

    }

    changeTab(str: string) {
        console.log(str);
    }
}
