export class CounterService {

  activationCounter = 0;
  deactivationCounter = 0;

  incActivationCounter() {
    this.activationCounter++;
    console.log("Activation Counter" + this.activationCounter);
  }

  incDeactivationCounter() {
    this.deactivationCounter++;
    console.log("Deactivation Counter: " + this.deactivationCounter);
  }

}
