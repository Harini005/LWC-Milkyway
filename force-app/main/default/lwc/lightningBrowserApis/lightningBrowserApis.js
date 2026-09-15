import { LightningElement } from "lwc";
import LightningAlert from "lightning/alert";
import LightningConfirm from "lightning/confirm";
import LightningPrompt from "lightning/prompt";
import LightningToast from "lightning/toast";

export default class LightningBrowserApis extends LightningElement {
  async alertHandler() {
    await LightningAlert.open({
      label: "Alert Message",
      message: "This is the basic alert message",
      theme: "SUCCESS"
    });
  }

  async confirmHandler() {
    let resp = await LightningConfirm.open({
      label: "This is a confirmation",
      message: "Are you ok with the message",
      theme: "inverse"
    });

    console.log(resp);
  }

  async promptHandler() {
    let resp = await LightningPrompt.open({
      label: "This is a prompt message",
      message: "Enter the value between 1 to 10",
      theme: "error"
    });

    if (Number(resp) === isNaN() || Number(resp) > 10) {
      LightningToast.show(
        {
          label: "Invalid Data",
          message: "Entered Data is not a valid Data",
          variant: "error"
        },
        this
      );
    }

    console.log(resp);
  }
}
