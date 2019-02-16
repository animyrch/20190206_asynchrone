import $ from "jquery";
import QueryConstructor from "./Class/QueryConstructor";
import { onClickEventContainer, onChangeStartDate, onChangeStateFree, onChangeNumberMaxResults } from "./events";
import { getCurrentDateFrench, getDataAsync, getDataThen } from "./tools";
import EventToulouse from "./Class/EventToulouse";


$(document).ready(function(){
    //date par défaut
    $('input[type="date"]').val(getCurrentDateFrench());
    let finalUrl:string = "";
    
    let queryConstructor:any = new QueryConstructor;
    queryConstructor.addQuery(`dataset`, `agenda-des-manifestations-culturelles-so-toulouse`);
    queryConstructor.addQuery(`rows`, `100`);
    queryConstructor.addQuery(`sort`, `date_debut`);
    queryConstructor.addQuery(`q`, `date_debut>${getCurrentDateFrench()}`);


    
    finalUrl = queryConstructor.constructUrl();
    //implementation de fetch avec .then .catch pendant le chargement de la page
    getDataThen(finalUrl);

    

    //user events
    $("#mainDiv").on("click", "div.eventContainer", function(this:any){
        onClickEventContainer(this);
    });

    $('input[type="date"]').on('change', function(this:any){
        onChangeStartDate(this, queryConstructor);
    });

    $("input[type=checkbox]").on("change", ()=>onChangeStateFree(queryConstructor));
    

    $("input[type=number").on('change', function(this:any){
        //console.log(this.value());
        onChangeNumberMaxResults(this, queryConstructor);
    });
});




export let putDataOnScreen = (data:any):void => {
    $('#mainDiv').html("");
    data.records.map(EventToulouse.displayEventDetails);
    
};


