import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/AccountController.createAccount';

export default class AccountCreator extends LightningElement {

    @track successMsg = '';
    @track errorMsg   = '';

    industryOptions = [
        { label: 'Technology',  value: 'Technology'  },
        { label: 'Finance',     value: 'Finance'     },
        { label: 'Healthcare',  value: 'Healthcare'  },
        { label: 'Retail',      value: 'Retail'      },
        { label: 'Education',   value: 'Education'   },
    ];

    handleCreate() {
        const accountName = this.template.querySelector('[data-id="accountName"]').value;
        const phone       = this.template.querySelector('[data-id="phone"]').value;
        const industry    = this.template.querySelector('[data-id="industry"]').value;
        const website     = this.template.querySelector('[data-id="website"]').value;

        // Validation
        if (!accountName) {
            this.errorMsg   = 'Account Name is required.';
            this.successMsg = '';
            return;
        }

        // Call Apex
        createAccount({ accountName, phone, industry, website })
            .then(result => {
                this.successMsg = result;
                this.errorMsg   = '';
                this.clearForm();
            })
            .catch(error => {
                this.errorMsg   = error.body.message;
                this.successMsg = '';
            });
    }

    handleReset() {
        this.clearForm();
        this.successMsg = '';
        this.errorMsg   = '';
    }

    clearForm() {
        this.template.querySelectorAll('lightning-input').forEach(i => {
            i.value = '';
        });
        this.template.querySelector('[data-id="industry"]').value = '';
    }
}