import { CardTextFieldControl } from './__text-field-control/card__text-field-control.js';

export class Card {
    static mapping = {
        'title': 'Title',
        'author': 'Author',
        'genre': 'Genre',
        'isRead': 'Read',
    };

    constructor(title, author, genre, isRead) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = isRead;
        this.control = null;
        this.createControl();
    }

    createControl = () => {
        this.control = document.createElement('div');
        this.control.classList.add('card');

        Object.keys(this).forEach(key => {
            if (Object.hasOwn(this, key) && typeof this[key] !== 'function' && key !== 'control') {
                
                const textFieldControl = new CardTextFieldControl(Card.mapping[key], this[key]);
                this.control.appendChild(textFieldControl.control);
            }
        });
    }
}