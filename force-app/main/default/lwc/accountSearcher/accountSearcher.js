import { LightningElement } from "lwc";
import GETACCOUNTDETAILS from "@salesforce/apex/AccountSearchController.getAccountDetails";
import LightningAlert from "lightning/alert";

export default class AccountSearcher extends LightningElement {
  getAccountDetails() {
    GETACCOUNTDETAILS({ accountId: this.refs.accountId.value })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        LightningAlert.open({
          label: "Error Occurred",
          message: error.body.message,
          theme: "error"
        });
      });
  }
}
