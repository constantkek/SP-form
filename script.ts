const DEFAULT_STEP_NUMBER = 1;

const test = () => {
  const form = document.querySelector('[multistep-form]');
  if (!form) {
    return;
  }
  const steps = [...form.querySelectorAll<HTMLElement>('[step]')];
  const index = steps.findIndex((step) => {
    return step.classList.contains('active');
  });
  const currentStep = index >= 0 ? steps[index] : steps[DEFAULT_STEP_NUMBER];
  console.log(currentStep); 
}
