import { LightningElement, track } from 'lwc';

export default class LeadScoreCard extends LightningElement {

    @track industry = '';
    @track source = '';
    @track employees = null;
    @track score = 0;
    @track showResult = false;
    @track showError = false;

    industryOptions = [
        { label: 'Technology', value: 'Technology' },
        { label: 'Finance',    value: 'Finance'    },
        { label: 'Healthcare', value: 'Healthcare' },
        { label: 'Retail',     value: 'Retail'     },
    ];

    sourceOptions = [
        { label: 'Web',       value: 'Web'       },
        { label: 'Referral',  value: 'Referral'  },
        { label: 'Cold Call', value: 'Cold Call' },
    ];

    // --- Event Handlers ---
    handleIndustryChange(event) { this.industry   = event.detail.value; }
    handleSourceChange(event)   { this.source     = event.detail.value; }
    handleEmployeeChange(event) { this.employees  = parseInt(event.detail.value); }

    // --- Score Logic ---
    handleCalculate() {
        if (!this.industry || !this.source || !this.employees) {
            this.showError  = true;
            this.showResult = false;
            return;
        }

        let total = 0;

        // Industry score
        if      (this.industry === 'Technology') total += 30;
        else if (this.industry === 'Finance')    total += 25;
        else if (this.industry === 'Healthcare') total += 20;
        else                                     total += 10;

        // Lead source score
        if      (this.source === 'Referral')  total += 25;
        else if (this.source === 'Web')       total += 20;
        else                                  total += 10;

        // Employee size score
        if      (this.employees >= 500) total += 30;
        else if (this.employees >= 100) total += 20;
        else                            total += 5;

        this.score      = total;
        this.showResult = true;
        this.showError  = false;
    }

    handleReset() {
        this.industry   = '';
        this.source     = '';
        this.employees  = null;
        this.score      = 0;
        this.showResult = false;
        this.showError  = false;
    }

    // --- Computed Getters ---
    get scoreLabel() {
        if (this.score >= 70) return '🔥 Hot Lead';
        if (this.score >= 40) return '🌤️ Warm Lead';
        return '❄️ Cold Lead';
    }

    get scorePercent() {
        return Math.round((this.score / 85) * 100);
    }
}