import $ from "jquery";
import QueryConstructor from "./Class/QueryConstructor";

$(document).ready(function(){
    
    let finalUrl:string = "";
    let baseUrl:string = "https://data.toulouse-metropole.fr/api/records/1.0/search/";
    
    let queryConstructor:any = new QueryConstructor;
    queryConstructor.addQuery(`dataset`, `agenda-des-manifestations-culturelles-so-toulouse`);
    queryConstructor.addQuery(`q`, `date_debut>"2019-02-01"`);
    queryConstructor.addQuery(`q`, `gratuit`);
    queryConstructor.addQuery(`rows`, `100`);
    queryConstructor.addQuery(`sort`, `date_debut`);

    finalUrl = queryConstructor.constructUrl(baseUrl);
    
    //implementation de fetch avec .then .catch pendant le chargement de la page
    getDataThen(finalUrl)
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.log(error));

    //implementation de la même fonction .fetch avec async await suite à l'appuie du bouton
    let getDataButton = $('#getDataButton');
    getDataButton.click(()=>
        getDataAsync(finalUrl)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.log(error))
    );   

});

let getDataAsync = async function (url = ``){
    return await fetch(url)
    .then(contenu => contenu.json());

};

let getDataThen = (url = ``) => {
    return fetch(url)
    .then(response => response.json());
};
