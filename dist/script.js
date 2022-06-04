"use strict";
const DEFAULT_STEP = 1;
const test = () => {
    var _a;
    const form = document.querySelector('[multistep-form]');
    if (!form) {
        return;
    }
    const steps = [...form.querySelectorAll('[step]')];
    const foundStep = (_a = steps.find((step) => {
        return step.classList.contains('active');
    })) === null || _a === void 0 ? void 0 : _a.dataset.step;
    const currentStep = foundStep ? parseInt(foundStep) : DEFAULT_STEP;
    console.log(currentStep);
};
