import { LightningElement } from "lwc";

export default class SlotRenderingChild extends LightningElement {
  shotChangeHandler() {
    console.log("Html in the slot changed");
  }
}
