"use strict";
const DEFAULT_STEP_INDEX = 0;
class Form {
    constructor() {
        this.steps = [...document.querySelectorAll('[step]')];
        this.prevButtons = [...document.querySelectorAll('[btn-prev]')];
        this.nextButtons = [...document.querySelectorAll('[btn-next]')];
        this.addEventListeners();
        this.currentStepIndex = this.getCurrentStepIndex();
    }
    getCurrentStepIndex() {
        if (!this.steps.length) {
            throw new Error('Steps must be defined');
        }
        let currentStepIndex = this.steps.findIndex((step) => {
            return step.classList.contains('active');
        });
        if (currentStepIndex < 0) {
            currentStepIndex = DEFAULT_STEP_INDEX;
            this.steps[currentStepIndex].classList.add('active');
        }
        return currentStepIndex;
    }
    updateCurrentStep(index) {
        this.steps[this.currentStepIndex].classList.remove('active');
        this.currentStepIndex = index;
        this.steps[this.currentStepIndex].classList.add('active');
    }
    addEventListeners() {
        this.prevButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.updateCurrentStep(index);
            });
        });
        this.nextButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.updateCurrentStep(index + 1);
            });
        });
    }
}
const form = new Form();
