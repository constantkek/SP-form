const DEFAULT_STEP_NUMBER = 1;

// set first step as active if no active found
const getCurrentStep = (): HTMLElement | undefined => {
  const form = document.querySelector('[multistep-form]');
  if (!form) {
    return;
  }
  const steps = [...form.querySelectorAll<HTMLElement>('[step]')];
  let currentStepIndex = steps.findIndex((step) => {
    return step.classList.contains('active');
  });
  if (currentStepIndex < 0) {
    currentStepIndex = 0;
    steps[currentStepIndex].classList.add('active');
  }
  return steps[currentStepIndex];
}
