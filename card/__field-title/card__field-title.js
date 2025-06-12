export class CardFieldTitle {
    constructor(title) {
        this.title = title;
        this.control = null;
        this.createControl();
    }

    createControl = () => {
        this.control = document.createElement('div');
        this.control.classList.add('card__field-title');
        this.control.textContent = this.title;
    }
}