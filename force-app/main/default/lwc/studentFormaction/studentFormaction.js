import { LightningElement, api } from "lwc";

export default class StudentFormaction extends LightningElement {
  @api recordId;
  buttonHandler(event) {
    console.log("record Id -->", this.recordId);
    let { label } = event.target;

    let userEnteredVals = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      dob: this.refs.dob.value
    };

    if (label === "Save") {
      console.log(userEnteredVals);
    } else if (label === "Cancel") {
      //this.dispatchEvent(new CloseActionScreenEvent());
    }
  }
}
