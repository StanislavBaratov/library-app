export class CardFieldValue {
    constructor(value) {
        this.value = value;
        this.control = null;
        this.createControl();
    }

    createControl = () => {
        this.control = document.createElement('div');
        this.control.classList.add('card__field-value');
        this.control.textContent = this.value;
    }
}