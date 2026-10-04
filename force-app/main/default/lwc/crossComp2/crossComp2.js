import { LightningElement } from "lwc";

export default class CrossComp2 extends LightningElement {
  counter;
  connectedCallback() {
    window.addEventListener("addtocart", this.handleMessage);
  }

  get counterVal() {
    if (this.counter) {
      return true;
    }
    return false;
  }

  handleMessage = (event) => {
    this.counter = event.detail.count;
  };
}
