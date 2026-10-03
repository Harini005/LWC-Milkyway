import { LightningElement, api } from "lwc";

export default class DynamicInteractionChild extends LightningElement {
  @api recordId;
  @api objectApiName;

  get computedVals() {
    if (this.recordId || this.objectApiName) {
      return true;
    }
    return false;
  }
}
