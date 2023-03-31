import{plantel}from"./Plantel.js";
import {equipo} from "./Equipo.js";
import{jugador}from "./jugador.js";
import{cuerpoTecnico}from "./CuerpoTecnico.js";
import{cuerpomedico}from "./Cuerpomedico.js";

function verOcultarCards(divCardver,cardsOcultar){
    let cardVer = document.querySelector(divCardver);
    cardVer.style.display = 'block';
    cardsOcultar.forEach(card => {
        let cardActual = document.querySelector(card);
         cardActual.style.display = 'none';
});
}
let deeps=[];
procesarDep();
function procesarDep(){
    departamento.forEach(dep=>{
        deeps.push(new departamento(dep.id.dep.departamento))
    })
    console.log(deeps);
}
