import { LightningElement } from 'lwc';
import LightningToast from 'lightning/toast';

export default class ToastWithAllDetails extends LightningElement {
    toastOptions = [
        {label : 'Basic Toast' , value : 'basicToast'},
        {label : 'Toast With Links' , value : 'toastWithLinks'}
    ]
    variantsOptions = [
        {label : 'Success' , value : 'SUCCESS'},
        {label : 'Error' , value : 'ERROR'},
        {label : 'Warning' , value : 'WARNING'},
        {label : 'Info' , value : 'Info'}
    ];

    modeOptions = [
        {label : 'Dismissible', value : 'dismissible' },
        {label : 'Pester' , value : 'pester'},
        {label : 'Sticky' , value : 'sticky'}
    ];

    toastOptionSelected;
    variantSelected;
    modeSelected;

    toastOptionHandler(event){
        this.toastOptionSelected = event.detail.value;
    }

    variantsOptionHandler(event){
        this.variantSelected = event.detail.value;
    }

    modeOptionHandler(event){
        this.modeSelected = event.detail.value;
    }

    get isbasicSelected(){
        return this.toastOptionSelected == 'basicToast' ? true : false; 
    }

    basicToastHandler(){
        LightningToast.show({
            label : 'This is the basic Toast Message', 
            message : 'This is the Toast Notification Message',
            variant : 'SUCCESS'
        } , this);
    }

    toastWithLinkHandler(){
        LightningToast.show({
            label : this.refs.titleInput.value ,
            message : this.refs.messageInput.value + ' link to the Salesforce Doc :  {0}',
            messageLinks : [
                {
                    url : 'https://help.salesforce.com',
                    label : 'Help Doc'
                }
            ],
            variant : this.variantSelected,
            mode : this.modeSelected
        }, this)
    }
}