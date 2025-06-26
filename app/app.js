import { Card } from "../card/card.js";
import { Main } from "../main/main.js";

class Book {
    constructor(title, author, genre, isRead) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = isRead;
        this.guid = null;
    }

    generateGUID = () => {
        this.guid = crypto.randomUUID();
    } 
}

class Library {
    constructor(...books) {
        this.books = {};
        this.addBooks(books);
    }

    addBooks = (books) => {
        books.forEach(item => {
            this.addBook(item);
        })
    }

    addBook = (book) => {
        book.generateGUID();
        this.books[book.guid] = book;
    }
}

class LibraryApp {
    constructor() {
        this.library = new Library();
        this.mainArea = new Main();
    }

    addBook = (book) => {
        const card = new Card(book);
        this.mainArea.appendCard(card);
    }
}

const app = new LibraryApp();