import { LightningElement } from 'lwc';
import LightningToast from 'lightning/toast';
import LightningToastContainer from 'lightning/toastContainer';

export default class BasicToastContainer extends LightningElement {

    connectedCallback(){
        const container = LightningToastContainer.instance();
        container.maxToasts = 5;
        container.toastPosition = 'top-left';
        container.containerPosition = 'absolute';
    }

    buttonHandler(event){
       LightningToast.show(
        {
            label : 'Basic Toast', 
            message : 'This is the Toast Messgae',
            variant : 'SUCCESS'
        }, 
        this
       )

    }
}