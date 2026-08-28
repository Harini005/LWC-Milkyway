import { LightningElement } from 'lwc';
import LightningToast from 'lightning/toast';

export default class ToastLinksWithData extends LightningElement {

    buttonHandler(event){
        LightningToast.show({
            label : 'Click on {SalesforceLink} for the salesforce doc',
            labelLinks : {
                SalesforceLink : {
                    url : 'https://www.saleforce.com',
                    label : 'Salesforce'
                }
            },
            message : 'clcik here for {helpLinks}',
            messageLinks : {
               helpLinks : {
                    url : 'https://help.salesforce.com',
                    label : 'Help Doc'
                }
            },
            variant : 'Warning',
            mode : 'dismissible'
        } , this)
    }
}