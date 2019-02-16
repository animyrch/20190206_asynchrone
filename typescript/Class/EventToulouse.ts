export default class EventToulouse{
    

    static displayEventDetails(details:any):void{
        let detailsContainer = details.fields;
        //console.log(detailsContainer);

        //nullchecks
        let eventDescriptionCourt = (typeof detailsContainer.descriptif_court === "undefined" ? `` : detailsContainer.descriptif_court);
        let eventLieuNom = (typeof detailsContainer.lieu_nom === "undefined" ? `` : detailsContainer.lieu_nom);
        let eventDateDebut = (typeof detailsContainer.date_debut === "undefined" ? `` : detailsContainer.date_debut);
        let eventCategorieManifestation = (typeof detailsContainer.categorie_de_la_manifestation === "undefined" ? `` : detailsContainer.categorie_de_la_manifestation);
        let eventTarifNormal = (typeof detailsContainer.tarif_normal === "undefined" ? `` : detailsContainer.tarif_normal);
        let eventDescriptifLong = (typeof detailsContainer.descriptif_long === "undefined" ? eventDescriptionCourt : detailsContainer.descriptif_long);

        //HTML construction
        let detailsHTML = '';
        detailsHTML += `<div class="eventContainer">`;
        detailsHTML +=     `<h3 class="eventTitle">${eventDescriptionCourt}</h3>`;
        detailsHTML +=     `<div class="infoBoxContainer">`;
        detailsHTML +=          `<span class="left eventLocation">${eventLieuNom}</span>`;
        detailsHTML +=          `<span><img src="assets/calendar-alt-regular.svg" alt="image-calendrier"></span>`;
        detailsHTML +=          `<span class="right eventDate"><span>${eventDateDebut}</span></span>`;
        detailsHTML +=     `</div>`;
        detailsHTML +=     `<div class="eventDetailsContainer">`;
        detailsHTML +=      `<div class="infoBoxContainer">`;
        detailsHTML +=         `<span class="left eventType">${eventCategorieManifestation}</span>`;
        detailsHTML +=         `<span><img src="assets/credit-card-regular.svg" alt="image-prix"></span>`;
        detailsHTML +=         `<span class="right eventPrice"><span>${eventTarifNormal}</span></span>`;
        detailsHTML +=      `</div>`;
        detailsHTML +=         `<p class="eventDescription hidden">${eventDescriptifLong}</p>`;
        detailsHTML +=     `</div>`;
        detailsHTML += `</div>`;
        detailsHTML += `<hr>`;
        $('#mainDiv').append(detailsHTML);


        
    }
}