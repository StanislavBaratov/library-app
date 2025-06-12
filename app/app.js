import { Card } from '../card/card.js';

class Book {
    constructor(title, author, genre, isRead) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.books = {};
    }

    addBook = (book) => {
        const guid = crypto.randomUUID();
        this.books[guid] = book;
    }
}

class App {
    constructor() {
        this.library = new Library();
        this.cardCanvas = document.querySelector('.card-canvas');
        this.addBooks();
    }

    addBooks = () => {
        const book1 = new Book('The Old man and the Sea', 'Ernest Hemmingway', 'Adventures', 'No');
        const card1 = new Card(book1);
        this.cardCanvas.appendChild(card1.control);
    }
}

const app = new App();