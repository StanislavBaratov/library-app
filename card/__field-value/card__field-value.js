import { BaseControl } from "../../base-control/base-control.js";

export class CardFieldValue extends BaseControl {
    static controlBEMName = 'card__field-value';
    static containerBEMName = 'card__field-value';
    static hasNoChildren = true;
    static controlType = 'div';
    static containerType = null;

    constructor(textContent) {
        super();
        this.textContent = textContent;
        this.createControl();
    }
}