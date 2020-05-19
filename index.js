#!/usr/bin/env node

const axios = require("axios").default;
const { getCode,getName, getNames} = require('country-list');

 
//je récupère l'année et le nom du pays
let myArgs = process.argv.slice(2);
let year = process.argv.slice(3);


 console.log(myArgs[0]);// nom du pays format saisi

let code = getCode(myArgs[0]);
let pays = getName(code);

console.log("code " + code);//code du pays recupéré
console.log("pays " + pays);//nom du pays récupéré


let theYear =year[0];
console.log(theYear);//année saisie

//si l'année est vide par défaut 2020
if (!theYear){
    theYear = 2020;
}


let lurl = "https://date.nager.at/api/v2/publicholidays/"+theYear+"/"+ code;
console.log(lurl);

axios
    .get(lurl)
    .then((response)=>{
        console.log(response.data);
        //console.log("ok");
    })
    .catch((error)=>{
        console.log("Error" + error);
    })
    .finally(function () {
        // always executed
      });
