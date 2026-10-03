import { LightningElement } from "lwc";

export default class EventProp extends LightningElement {
  buttonHandler(event) {
    console.log(event.type);
    console.log(event.composedPath());
  }
}
