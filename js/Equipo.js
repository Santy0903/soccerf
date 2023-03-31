  import {plantel}from"./Plantel.js";
import class Equipo extends Plantel{
    static idEquipo = 0;
    constructor(nombre,fecha,ubicacion,logo,fotoUniformeLocal,fotoUniformeVisitante){
        super(nombre,fecha,ubicacion);
        this._id = ++Equipo.idEquipo;
        this._logo = logo;
        this._uniformeLocal = fotoUniformeLocal;
        this._uniformeVisitante = fotoUniformeVisitante;
   
    }
    get  id(){
        return this._id;
    }
    get logo(){
        return this._logo;
    }
    set logo(v_logo){
        this._logo = v_logo;
    }
    get uniformeLocal(){
        return this._uniformeLocal;
    }
    set uniformeLocal(v_uniformeLocal){
        this._uniformeLocal = v_uniformeLocal;
    }
    get uniformeVisitante(){
        return this._uniformeVisitante;
    }
    set uniformeVisitante(v_uniformeVisitante){
        this._uniformeVisitante = v_uniformeVisitante;
    }
}