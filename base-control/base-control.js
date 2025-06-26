export class BaseControl {
    static controlBEMName = 'base-control';
    static containerBEMName = 'base-control__container';
    static hasNoChildren = false;
    static controlType = 'div';
    static containerType = 'div';

    constructor() {
        this.guid = crypto.randomUUID();
        this.control = null;
        this.container = null;
        this.parent = null;
        this.children = {};
        this.textContent = '';
    }

    createControl = (controlProperties={}) => {
        this.control = document.createElement(this.constructor.controlType);
        this.setControlProperties(controlProperties);
        this.control.classList.add(this.constructor.controlBEMName);
        this.control.textContent = this.textContent;

        if (!!this.constructor.containerType) {
            this.container = document.createElement(this.constructor.containerType);
            this.container.classList.add(this.constructor.containerBEMName);
            this.control.appendChild(this.container);


        } else {
            this.container = this.control;
        }

        
    }

    setControlProperties = (properties) => {
        Object.keys(properties).filter(item => typeof properties[item] !== 'function')
        .forEach(item => {
            if (Object.hasOwn(properties, item)) {
                this.control.setAttribute(item, properties[item]);
            }
        });
    }

    appendChildControl = (child) => {
        if (this.constructor.hasNoChildren) {
            throw new Error('This control cannot have any children');  
        }

        this.container.appendChild(child.control);
        this.children[child.guid] = child;

        child.parent = this;

        return child.guid;
    }

    removeChildControl = (childID) => {
        if (!this.children[childID]) {
            throw new Error('This control has been removed or does not exist');
            
        }

        this.container.remove(this.children[childID].control);
        this.children[childID] = null;
    }

    removeAllChildren = () => {
        Object.keys(this.children).forEach(item => {
            if (Object.hasOwn(item) && typeof item !== 'function' && this.children[item] !== null) {
                this.control.remove(this.children[item].control);
            }
        });

        this.children = {};
    }
}
