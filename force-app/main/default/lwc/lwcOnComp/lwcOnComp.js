import { LightningElement } from "lwc";

export default class LwcOnComp extends LightningElement {
  eventHandlers = {
    click: this.handleClick,
    mouseover: this.handleMouseOver
  };

  handleClick() {
    console.log("Click event triggered");
  }

  handleMouseOver() {
    console.log("Mouse over event triggered");
  }
}
