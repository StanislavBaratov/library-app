import { BaseControl } from '../base-control/base-control.js';
import { CardTextFieldControl } from './__text-field-control/card__text-field-control.js';

export class Card extends BaseControl {
    static controlBEMName = 'card';
    static containerBEMName = 'card';
    static hasNoChildren = false;
    static controlType = 'div';
    static containerType = null;
    static mapping = {
        'title': 'Title',
        'author': 'Author',
        'genre': 'Genre',
        'isRead': 'Read',
    };

    constructor(book) {
        super();
        this.createControl();

        this.book = book;
        this.addFields();
    }

    addFields = () => {
        Object.keys(this.constructor.mapping).forEach(item => {
            this.appendChildControl(new CardTextFieldControl(this.constructor.mapping[item], this.book[item]));
        })
    }
}