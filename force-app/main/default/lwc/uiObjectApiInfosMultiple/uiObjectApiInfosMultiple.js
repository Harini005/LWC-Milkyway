import { LightningElement, wire } from "lwc";
import { getObjectInfos } from "lightning/uiObjectInfoApi";

export default class UiObjectApiInfosMultiple extends LightningElement {
  objectNames;
  @wire(getObjectInfos, { objectApiNames: "$objectNames" })
  objectDetails({ data, error }) {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.error(error);
    }
  }

  buttonHandler() {
    this.objectNames = this.refs.objectNames.value.split(",");
  }
}
