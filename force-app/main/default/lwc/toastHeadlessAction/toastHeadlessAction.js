import { LightningElement, api } from "lwc";
import lightninToast from "lightning/toast";

export default class ToastHeadlessAction extends LightningElement {
  @api invoke() {
    lightninToast.show(
      {
        message: "This message is from Headless Action",
        label: "Hurray",
        theme: "success"
      },
      this
    );
  }
}
