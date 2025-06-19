export class BaseControl {
    static controlBEMName = 'base-control';
    static containerBEMName = 'base-control__container';
    static hasContainer = false;
    static hasNoChildren = false;

    constructor() {
        this.control = null;
        this.container = null;
        this.parent = null;
        this.children = {};
        this.childCounter = 0;
    }

    createControl = (controlType='div', containerType='div', controlProperties={}) => {
        console.log('OK');

        this.control = document.createElement(controlType);
        this.control.classList.add(this.constructor.controlBEMName);
        this.setControlProperties(controlProperties);

        if (this.constructor.hasContainer) {
            this.container = document.createElement(containerType);
            this.container.classList.add(this.constructor.containerBEMName);
            this.control.appendChild(this.container);

        } else {
            this.container = this.control;
        }

        
    }

    setControlProperties = (properties) => {
        Object.keys(properties).filter(item => typeof properties[item] !== 'function').forEach(item => {
            if (Object.hasOwn(properties, item)) {
                this.control.setAttribute(item, properties[item]);
            }
        });
    }

    appendChildControl = (child) => {
        if (this.constructor.hasNoChildren) {
            throw new Error('This control cannot have any children');  
        }

        const childID = ++this.childCounter;
        const aChild = this.container.appendChild(child.control);
        
        this.children[childID] = aChild;
        
        return childID;
    }

    removeChildControl = (childID) => {
        if (!this.children[childID]) {
            throw new Error('This control has been removed or does not exist');
            
        }

        this.container.remove(this.children[childID]);
        this.children[childID] = null;
    }

    removeAllChildren = () => {
        for (let i = 1; i <= this.childCounter; i++) {
            if (!!this.children[i]) {
                this.removeChildControl(i);
            }
        }
    }
}
