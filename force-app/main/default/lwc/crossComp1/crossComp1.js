import { LightningElement } from "lwc";

export default class CrossComp1 extends LightningElement {
  counter = 0;
  buttonHandler() {
    this.counter += 1;
    let evt = new CustomEvent("addtocart", {
      bubbles: true,
      composed: true,
      detail: {
        count: this.counter
      }
    });

    window.dispatchEvent(evt);
  }
}
