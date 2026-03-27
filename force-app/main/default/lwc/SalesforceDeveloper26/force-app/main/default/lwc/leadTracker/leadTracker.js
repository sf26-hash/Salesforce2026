import { LightningElement, wire, track } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getLeads        from '@salesforce/apex/LeadController.getLeads';
import updateLeadStatus from '@salesforce/apex/LeadController.updateLeadStatus';

export default class LeadTracker extends LightningElement {

    @track successMsg = '';
    @track errorMsg   = '';

    statusOptions = [
        { label: 'New',          value: 'New'          },
        { label: 'Working',      value: 'Working'      },
        { label: 'Contacted',    value: 'Contacted'    },
        { label: 'Qualified',    value: 'Qualified'    },
        { label: 'Unqualified',  value: 'Unqualified'  },
    ];

    // Auto-fetch leads using @wire
    @wire(getLeads)
    leads;

    handleStatusChange(event) {
        const leadId   = event.target.dataset.id;
        const newStatus = event.detail.value;

        updateLeadStatus({ leadId, newStatus })
            .then(result => {
                this.successMsg = result;
                this.errorMsg   = '';
                // Refresh table after update
                return refreshApex(this.leads);
            })
            .catch(error => {
                this.errorMsg   = error.body.message;
                this.successMsg = '';
            });
    }
}