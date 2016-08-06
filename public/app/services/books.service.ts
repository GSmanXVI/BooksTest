import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Book} from '../models/book';

@Injectable()
export class BooksService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'api/books'
    }

    getBooks() {

    }

    getBookById(id: string) {
        console.log(id);
        let book = new Book();
        book.name = "My First Book";
        book.author = "Skripnikov G.";
        book.year = 2016;
        book.genre = "Horror";
        book.info = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     In placerat porttitor iaculis. Nulla aliquam suscipit
                     magna sit amet facilisis. Nulla tempus massa elementum,
                     volutpat enim at, commodo augue. In molestie felis vitae
                     massa dictum venenatis. Cras ac nisl quam. Mauris id
                     bibendum nisi, porta rutrum lectus. Donec mattis lacinia
                     quam at euismod. Aliquam finibus dui sit amet maximus
                     hendrerit. Cras lobortis massa quis nunc vulputate
                     bibendum. Nam sit amet elementum sapien. Etiam fringilla
                     lacinia orci ut condimentum. Quisque eget semper ante, ut
                     interdum nunc. Donec auctor lectus quam, quis consectetur
                     orci blandit et.`
        return book;
    }

    addBook() {

    }

    editBook() {

    }
}
