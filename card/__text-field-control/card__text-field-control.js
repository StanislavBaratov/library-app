import { BaseControl } from '../../base-control/base-control.js';
import { CardFieldTitle } from '../__field-title/card__field-title.js';
import { CardFieldValue } from '../__field-value/card__field-value.js';

export class CardTextFieldControl extends BaseControl {
    static controlBEMName = 'card__text-field-control';
    static containerBEMName = 'card__text-field-control';
    static hasNoChildren = false;
    static controlType = 'div';
    static containerType = null;

    constructor(title, value) {
        super();
        this.createControl();

        this.title = this.appendChildControl(new CardFieldTitle(title));
        this.value = this.appendChildControl(new CardFieldValue(value));
    }
}