import { LightningElement } from "lwc";

export default class FullyDynamicComp extends LightningElement {
  componentConstructor;
  async showCompHandler() {
    let ipComp = this.refs.compName.value;
    let compDef = await import(ipComp);
    this.componentConstructor = compDef.default;
  }
}
