import { Card } from '../card/card.js';

class App {
    constructor() {
        this.library = [];
        this.cardCanvas = document.querySelector('.card-canvas');
        this.addBooks();
    }

    addBooks = () => {
        const book1 = new Card('The Old man and the Sea', 'Ernest Hemmingway', 'Adventures', 'No');
        this.cardCanvas.appendChild(book1.control);
    }
}

const app = new App();