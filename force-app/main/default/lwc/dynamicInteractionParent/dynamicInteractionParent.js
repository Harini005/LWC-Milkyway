import { LightningElement } from "lwc";

export default class DynamicInteractionParent extends LightningElement {
  handleEvent() {
    this.dispatchEvent(
      new CustomEvent("accountselected", {
        detail: {
          recordId: "1234",
          objectApiName: "Account"
        }
      })
    );
  }
}
