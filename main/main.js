import { BaseControl } from "../base-control/base-control.js";
import { CardCanvas } from "../card-canvas/card-canvas.js";

export class Main extends BaseControl {
    static controlBEMName = 'main';
    static containerBEMName = 'main';
    static hasNoChildren = false;
    static controlType = 'main';
    static containerType = null;

    constructor() {
        super();
        this.control = document.querySelector('.main');
        this.container = this.control;
        this.canvas = new CardCanvas();

        this.appendChildControl(this.canvas);
    }

    appendCard = (card) => {
        this.canvas.appendChildControl(card);
    }


}