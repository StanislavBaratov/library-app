import { BaseControl } from "../../base-control/base-control.js";

export class CardFieldTitle extends BaseControl {
    static controlBEMName = 'card__field-title';
    static containerBEMName = 'card__field-title';
    static hasNoChildren = true;
    static controlType = 'div';
    static containerType = null;

    constructor(textContent) {
        super();
        this.textContent = textContent;
        this.createControl();
    }
}