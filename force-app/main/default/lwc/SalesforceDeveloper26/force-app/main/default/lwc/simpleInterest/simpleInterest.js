import { LightningElement, track } from 'lwc';

export default class SimpleInterest extends LightningElement {

    @track result      = false;
    @track interest    = 0;
    @track totalAmount = 0;
    @track errorMsg    = '';

    handleCalculate() {
        const principal = parseFloat(this.template.querySelector('[data-id="principal"]').value);
        const rate      = parseFloat(this.template.querySelector('[data-id="rate"]').value);
        const time      = parseFloat(this.template.querySelector('[data-id="time"]').value);

        // Validation
        if (!principal || !rate || !time) {
            this.errorMsg = 'Please fill all fields.';
            this.result   = false;
            return;
        }

        // Formula: SI = (P * R * T) / 100
        this.interest    = ((principal * rate * time) / 100).toFixed(2);
        this.totalAmount = (principal + parseFloat(this.interest)).toFixed(2);
        this.result      = true;
        this.errorMsg    = '';
    }

    handleReset() {
        this.template.querySelectorAll('lightning-input').forEach(i => {
            i.value = '';
        });
        this.result      = false;
        this.interest    = 0;
        this.totalAmount = 0;
        this.errorMsg    = '';
    }
}