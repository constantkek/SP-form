const DEFAULT_STEP_INDEX = 0;

class Form {
  private steps: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('[step]')];
  private prevButtons: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('[btn-prev]')];
  private nextButtons: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('[btn-next]')];
  private inputs: Array<Array<HTMLInputElement>> = []; // ordered by step at constructor

  private currentStepIndex: number;

  public constructor() {
    this.steps.forEach((step) => {
      this.inputs.push([...step.querySelectorAll<HTMLInputElement>('input')]);
    });
    this.addEventListeners();
    this.currentStepIndex = this.getCurrentStepIndex()
  }

  // set first step as active if no active found
  private getCurrentStepIndex(): number {
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

  private updateCurrentStep(index: number): void {
    this.steps[this.currentStepIndex].classList.remove('active');
    this.currentStepIndex = index;
    this.steps[this.currentStepIndex].classList.add('active');
  }

  private addEventListeners(): void {
    this.prevButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.updateCurrentStep(index);
      });
    });
    
    this.nextButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const allValid = this.inputs[this.currentStepIndex].every(input => input.checkValidity());
        if (allValid) {
          this.updateCurrentStep(index + 1);
        }
      });
    });
  }
}

const form = new Form();