import { LightningElement, wire } from "lwc";

import { getObjectInfo } from "lightning/uiObjectInfoApi";

export default class UiObjectApiSingle extends LightningElement {
  objectName;
  @wire(getObjectInfo, { objectApiName: "$objectName" })
  objectDetails({ data, error }) {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.error(error);
    }
  }

  getObjectDetails() {
    this.objectName = this.refs.objectNameIp.value;
  }
}
