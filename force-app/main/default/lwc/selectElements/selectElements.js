import { LightningElement } from "lwc";

export default class SelectElements extends LightningElement {
  buttonHandler(event) {
    let containerEle = this.template.querySelector(".container");

    console.log("tagName-->", containerEle.tagName);
    console.log(containerEle);

    let refEle = this.refs.name;
    console.log(refEle);
    console.log(event);

    console.log(refEle.innerText);
    console.log("Tag Name --> ", refEle.tagName);

    refEle.innerText = "This is the para from the Js";

    let paraEle = this.refs.name;
    console.log(paraEle.getAttribute("data-columns"));

    paraEle.setAttribute("title", "Insertion of title from Js");

    let inputEle = this.template.querySelector("lightning-input");
    inputEle.value = "Hello from js 👁️";
  }
}
