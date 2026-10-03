import { LightningElement, api } from "lwc";
import {
  FlowNavigationNextEvent,
  FlowNavigationBackEvent,
  FlowNavigationFinishEvent,
  FlowNavigationPauseEvent
} from "lightning/flowSupport";

export default class FlowNavigation extends LightningElement {
  @api sobjectName = "Account";
  @api availableActions = [];

  nextAction() {
    console.log("available Actions --> " + this.availableActions);

    //this.sobjectName = this.refs.name.value;

    if (this.availableActions.includes("NEXT")) {
      this.dispatchEvent(new FlowNavigationNextEvent());
    }

    if (this.availableActions.includes("BACK")) {
      this.dispatchEvent(new FlowNavigationBackEvent());
    }

    if (this.availableActions.includes("FINISH")) {
      this.dispatchEvent(new FlowNavigationFinishEvent());
    }

    if (this.availableActions.includes("PAUSE")) {
      this.dispatchEvent(new FlowNavigationPauseEvent());
    }
  }
}
