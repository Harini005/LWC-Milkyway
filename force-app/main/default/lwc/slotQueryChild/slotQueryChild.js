import { LightningElement } from "lwc";

export default class SlotQueryChild extends LightningElement {
  renderedCallback() {
    let btns = this.template.querySelectorAll("lightning-button");
    console.log("buttons using the template query Selector -->", btns);

    let anotherBtns = this.querySelectorAll("lightning-button");
    console.log(anotherBtns);
  }
}
