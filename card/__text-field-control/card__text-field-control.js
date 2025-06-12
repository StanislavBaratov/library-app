import { CardFieldTitle } from '../__field-title/card__field-title.js';
import { CardFieldValue } from '../__field-value/card__field-value.js';

export class CardTextFieldControl {
    constructor(title, value) {
        this.title = title;
        this.value = value;
        this.control = null;
        this.createControl();
    }

    createControl = () => {
        this.control = document.createElement('div');
        this.control.classList.add('card__text-field-control');

        const title = new CardFieldTitle(this.title);
        const value = new CardFieldValue(this.value);

        this.control.append(title.control, value.control);
    }
}