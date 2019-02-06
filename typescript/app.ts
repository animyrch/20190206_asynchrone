import $ = require("jquery");

//let testVar:string = "mytest";

//console.log(testVar); 



$(document).ready(function(){

    getEventsJson();

});

let getEventsJson = () => {
//    $("#testDiv").html(testVar);
    let dateFilter = "date_debut%3E%222019-02-01%22";
    $.ajax({
        method: 'GET',
        url: `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=${dateFilter}`,
        dataType: 'json',
        success: onSuccess,
        error: onError
    })
};

let onSuccess = (dataJson:any) => {
    //$("#testDiv").html("success");    
    let dataJsonLength:number = dataJson.nhits;
    dataJson.records.sort((a:any, b:any)=>{
        let currentA:any = new Date(a.fields.date_debut);
        let currentB:any = new Date(b.fields.date_debut);
        return currentB - currentA;
    });
    dataJson.records.map(displayEvents);
    
    
    
};
let onError = () => {
    $("#testDiv").html("error");
};

let sortResults = (element:string, bucket:JSON) => {

};

let displayEvents = (eventsBucketElement:any) => {
//    $("#testDiv").append(eventsBucket[i].fields.date_debut);
    console.log(eventsBucketElement.fields.date_debut);
    $("#testDiv").append(eventsBucketElement.fields.date_debut);

};