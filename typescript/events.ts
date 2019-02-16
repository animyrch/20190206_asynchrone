import { getDataAsync } from "./tools";

export let onClickEventContainer = (domObject:any):void => {
    //alert(typeof that);
    domObject.querySelector("p.eventDescription").classList.toggle("hidden");
};

export let onChangeStartDate = (domObject: any, queryObject:any):void => {
    let selectedDate: any = $(domObject).val();
    queryObject.addQuery(`q`, `date_debut>${selectedDate}`);
    let finalUrl = queryObject.constructUrl();
    getDataAsync(finalUrl);
};

export let onChangeStateFree = (queryObject: any):void => {
    
    queryObject.toggleFilterForFree();
    let finalUrl = queryObject.constructUrl();
    getDataAsync(finalUrl);
};

export let onChangeNumberMaxResults = (domObject: any, queryObject: any):void => {
    let requestedResultsAmount = $(domObject).val();
    queryObject.addQuery(`rows`, requestedResultsAmount);
    let finalUrl = queryObject.constructUrl();
    getDataAsync(finalUrl);
};