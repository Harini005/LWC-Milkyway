import { LightningElement } from "lwc";

export default class SlotQueryParent extends LightningElement {
  handleSave(event) {
    console.log(event.type);
    let btns = this.template.querySelectorAll("lightning-button");
    console.log(JSON.stringify(btns));

    console.log(Array.from(btns).length);
  }

  handleCancel(event) {
    console.log(event.type);
    console.log("Cancel handler invoked");
  }

  errorCallback(error, stack) {
    console.log(error);
    console.log(stack);
  }
}
