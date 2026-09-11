import { LightningElement } from "lwc";

export default class LwcOnComp extends LightningElement {
  eventHandlers = {
    click: this.handleClick,
    mouseover: this.handleMouseOver
  };

  handleClick(event) {
    console.log("Click event triggered");
    console.log(event.type);
  }

  handleMouseOver(event) {
    console.log("Mouse over event triggered");
    console.log(event.type);
  }
}
