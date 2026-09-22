import { LightningElement } from "lwc";
import CAT_API_URL from "@salesforce/label/c.catApiUrl";

export default class CatImageGenerator extends LightningElement {
  imgUrl;
  async renderedCallback() {
    try {
      if (CAT_API_URL) {
        let resp = await fetch(CAT_API_URL);
        this.imgUrl = resp.url;
        console.log(this.imgUrl);
        console.log("resp ==> ", resp);
        console.log("typeof resp ==> ", typeof resp);
        console.log("resp.constructor ==> ", resp.constructor);
        console.log("resp.json ==> ", resp.json);
        let jsonBody = resp.body.json;
        console.log(jsonBody);
      }
    } catch (error) {
      console.error("error occurred ----> ", error);
    }

    console.log("Inside Cat Image URL");
  }
}
