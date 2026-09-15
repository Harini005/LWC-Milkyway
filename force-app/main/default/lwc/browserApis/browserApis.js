import { LightningElement } from "lwc";

export default class BrowserApis extends LightningElement {
  
  alertHandler(){
      alert('This is the alert message');
  }
  async confirmHandler(){
     let resp =  confirm('Are you ok with the changes');
     console.log(resp);
  }
  promptHandler(){
     let resp = prompt('Please Enter the order N0');
     console.log(resp);
  }
}
