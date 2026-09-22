import { LightningElement } from "lwc";

const comps = {
  option1: () => import("c/toastLinksWithData"),
  option2: () => import("c/toastWithLinks")
};

export default class DynamicComp1 extends LightningElement {
  selectedOption = "option1";

  componentConstructor;

  options = [
    {
      label: "option1",
      value: "option1"
    },
    {
      label: "option2",
      value: "option2"
    }
  ];

  async renderedCallback() {
    if (this.componentConstructor) {
      return;
    }

    let resp = await comps[this.selectedOption]();

    this.componentConstructor = resp.default;
  }

  async handleChange(event) {
    this.selectedOption = event.detail.value;

    let resp = await comps[this.selectedOption]();

    this.componentConstructor = resp.default;
  }
}
