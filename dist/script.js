"use strict";
const DEFAULT_STEP_NUMBER = 1;
const getCurrentStep = () => {
    const form = document.querySelector('[multistep-form]');
    if (!form) {
        return;
    }
    const steps = [...form.querySelectorAll('[step]')];
    let currentStepIndex = steps.findIndex((step) => {
        return step.classList.contains('active');
    });
    if (currentStepIndex < 0) {
        currentStepIndex = 0;
        steps[currentStepIndex].classList.add('active');
    }
    return steps[currentStepIndex];
};
