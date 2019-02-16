
import { putDataOnScreen } from "./app";


export let getCurrentDateFrench = ():string => {
    let fullDate = new Date();
    let twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)	twoDigitMonth=`0${twoDigitMonth}`;
    let twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1)	twoDigitDate=`0${twoDigitDate}`;
    let currentDate = `${fullDate.getFullYear()}-${twoDigitMonth}-${twoDigitDate}`;
    return currentDate;
};
export let getDataAsync = async function (url = ``){
    return await fetch(url)
    .then(contenu => contenu.json())
    .then(data => putDataOnScreen(data))
    .catch(error => console.log(error));

};

export let getDataThen = (url = ``) => {
    return fetch(url)
    .then(response => response.json())
    .then(data => putDataOnScreen(data))
    .catch(error => console.log(error));
};