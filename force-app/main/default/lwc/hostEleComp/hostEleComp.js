import { LightningElement } from "lwc";

export default class HostEleComp extends LightningElement {
  connectedCallback() {
    console.log(this.hostElement);
  }
}
