import { LightningElement } from "lwc";

export default class ConnectedCallbackFunc extends LightningElement {
  connectedCallback() {
    let elem = this.template.querySelector("div");

    console.log("connectedCallbackFunc -->", elem);
    //console.log(elem.isConnected);
  }
}
