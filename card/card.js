import { CardTextFieldControl } from './__text-field-control/card__text-field-control.js';

export class Card {
    static mapping = {
        'title': 'Title',
        'author': 'Author',
        'genre': 'Genre',
        'isRead': 'Read',
    };

    constructor(book) {
        this.book = book;
        this.control = null;
        this.createControl();
    }

    createControl = () => {
        this.control = document.createElement('div');
        this.control.classList.add('card');

        Object.keys(this.book).forEach(key => {
            if (Object.hasOwn(this.book, key)) {
                
                const textFieldControl = new CardTextFieldControl(Card.mapping[key], this.book[key]);
                this.control.appendChild(textFieldControl.control);
            }
        });
    }
}