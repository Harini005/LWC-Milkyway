import { LightningElement } from "lwc";

export default class SlotElementsChild extends LightningElement {
  changeHandler(event) {
    console.log("Assigned Elements");
    console.log(event.target.assignedElements());
  }
}
