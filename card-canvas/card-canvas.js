import { BaseControl } from "../base-control/base-control.js";

export class CardCanvas extends BaseControl {
    static controlBEMName = 'card-canvas';
    static containerBEMName = 'card-canvas';
    static hasNoChildren = false;
    static controlType = 'div';
    static containerType = null;

    constructor() {
        super();
        this.createControl();
    }
}