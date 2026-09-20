import { LightningElement } from "lwc";
import FORM_FACTOR from "@salesforce/client/formFactor";

export default class ClientFormFactor extends LightningElement {
  deviceSize;
  connectedCallback() {
    this.deviceSize = FORM_FACTOR;
  }
}
