import { LightningElement, api } from "lwc";

export default class FlowVariablesFromLwc extends LightningElement {
  @api accName;
  @api accType;
  @api account;
  @api recordId;
  @api recordIds;

  buttonHandler() {
    console.log(this.accName);
    console.log(this.accType);
    console.log(this.account);
    console.log(this.recordId);
    console.log(this.recordIds);
  }
}
