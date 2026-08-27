import { LightningElement } from 'lwc';
import LightningToast from 'lightning/toast'

export default class ToastWithLinks extends LightningElement {
    toastButtonHandler(){
        LightningToast.show({
            label : 'Link to the {0} website',
            labelLinks : [
                'Salesforce'
            ],
            message : 'This is the link to the Hlp doc : {0}',
            messageLinks: [
                {
                    url : 'https://google.com',
                    label : 'Help Doc'
                }
            ],
            variant : 'Success'
        }, this)
    }
}