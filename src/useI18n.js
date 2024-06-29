import React from 'react';
import { useContext } from 'react';
import {LocalContext} from './LocalProvider'

export default function useI18n(){
    const {resources,locale}=useContext(LocalContext)
    
    const getLocaleErrorMessage=(item)=>{
        if(item.errorCode){
            const key='error.'+item.errorCode;
            if(resources[key]){
                return resources[key];
            }
        }

        let message = item.message;
        if(message[locale]){
            return message[locale]
        }

        return message+' '+item.errorCode;
    };

    const getLocaleLabel=(title)=>{
        if(title?.key&&resources[title.key]){
            return resources[title.key];
        }

        if(title[locale]){
            return title[locale]
        }

        if(title.default){
            return title.default;
        }

        return title;
    }
        
    return {
        getLocaleLabel,
        getLocaleErrorMessage,
        locale,
        resources};
}