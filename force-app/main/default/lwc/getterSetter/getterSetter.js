import { LightningElement } from "lwc";

export default class GetterSetter extends LightningElement {
  name;

  get nameEntered() {
    return this.name;
  }

  set nameEntered(value) {
    this.name = value;
  }
}
