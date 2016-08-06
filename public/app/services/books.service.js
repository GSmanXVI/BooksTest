System.register(['@angular/core', '../models/book'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, book_1;
    var BooksService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_1_1) {
                book_1 = book_1_1;
            }],
        execute: function() {
            BooksService = (function () {
                function BooksService() {
                    this.apiUrl = 'api/books';
                }
                BooksService.prototype.getBooks = function () {
                };
                BooksService.prototype.getBookById = function (id) {
                    console.log(id);
                    var book = new book_1.Book();
                    book.name = "My First Book";
                    book.author = "Skripnikov G.";
                    book.year = 2016;
                    book.genre = "Horror";
                    book.info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                     In placerat porttitor iaculis. Nulla aliquam suscipit\n                     magna sit amet facilisis. Nulla tempus massa elementum,\n                     volutpat enim at, commodo augue. In molestie felis vitae\n                     massa dictum venenatis. Cras ac nisl quam. Mauris id\n                     bibendum nisi, porta rutrum lectus. Donec mattis lacinia\n                     quam at euismod. Aliquam finibus dui sit amet maximus\n                     hendrerit. Cras lobortis massa quis nunc vulputate\n                     bibendum. Nam sit amet elementum sapien. Etiam fringilla\n                     lacinia orci ut condimentum. Quisque eget semper ante, ut\n                     interdum nunc. Donec auctor lectus quam, quis consectetur\n                     orci blandit et.";
                    return book;
                };
                BooksService.prototype.addBook = function () {
                };
                BooksService.prototype.editBook = function () {
                };
                BooksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BooksService);
                return BooksService;
            }());
            exports_1("BooksService", BooksService);
        }
    }
});
//# sourceMappingURL=books.service.js.map