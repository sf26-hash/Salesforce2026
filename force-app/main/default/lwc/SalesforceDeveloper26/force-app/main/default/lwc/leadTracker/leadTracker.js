import { LightningElement, wire, track } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getLeads from '@salesforce/apex/LeadController.getLeads';
import updateLeadStatus from '@salesforce/apex/LeadController.updateLeadStatus';

export default class LeadTracker extends LightningElement {

    @track successMsg = '';
    @track errorMsg   = '';

    // Auto fetch leads on load
    @wire(getLeads)
    leads;

    handleUpdate(event) {
        const leadId = event.target.dataset.id;

        updateLeadStatus({ leadId, status: 'Contacted' })
            .then(result => {
                this.successMsg = result;
                this.errorMsg   = '';
                return refreshApex(this.leads);
            })
            .catch(error => {
                this.errorMsg   = error.body.message;
                this.successMsg = '';
            });
    }
}