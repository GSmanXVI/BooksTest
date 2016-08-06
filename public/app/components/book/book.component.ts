import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../models/book';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'book',
  templateUrl: 'app/components/book/book.component.html',
  styleUrls: ['app/components/book/book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
    book: Book;
    sub: any;
    isEdit: boolean;

    constructor(
        private booksService: BooksService,
        private route: ActivatedRoute
    ) {
        this.isEdit = false;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.book = this.booksService.getBookById(id);
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    edit() {
        this.isEdit = !this.isEdit;
    }

    save() {
        this.isEdit = false;
    }
}
