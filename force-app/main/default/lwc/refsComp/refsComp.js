import { LightningElement } from "lwc";

export default class RefsComp extends LightningElement {
  buttonHandler() {
    console.log(this.refs.sampleIp);
  }
}
