import { LightningElement } from 'lwc';
import LightningToast from 'lightning/toast';

export default class BasicToast extends LightningElement {
    
    showToastHandler(){
        LightningToast.show({
            label : 'This is a toast notifictaion',
            message : 'This is a toast Message',
            variant : 'SUCCESS'
        } , this);
    }
}