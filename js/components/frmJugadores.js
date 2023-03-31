class FrmJugadores extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
        <div class="card">
            <div class="card-header">
            Registro de jugadores
            </div>
            <div class="card-body">
            <form id="frmJugador">
                <div class="mb-3" id="NombreJuga">
                <label for="exampleInputEmail1" class="form-label">Nombre del jugador</label>
                <input type="text" class="form-control" id="Nombre1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"> Tu nombre completo</div>
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Ingrese su Dorsal</label>
                <input type="number" class="form-control" id="Dorsal">
                </div>
                <div class="input-group mb-10">
                <div class="row g-1">           
                <select class="col-sm-9"  id="PosicionCampo">
                <option selected>Ingrese su posicion </option>
                <option value="1">Arquero</option>
                <option value="2">Defensa central</option>
                <option value="3">lateral   Izquierdo</option>
                <option value="4">Lateral Derecho</option>
                <option value="5">CentroCampista pivote</option>
                <option value="6">centroCampista Media Punta</option>
                <option value="7">CentroCampista interior</option>
                <option value="8">Delantero Extremo Derecho</option>
                <option value="9">Delantero Extremo Izquierdo</option>
                <option value="10">Delantero Central</option>
                <br>
                </select>
                </div>
                
                <div class="col-sm-3">
                <label for="Foto" class="form-label lst">Foto Perfil</label>
                <input type = "file" class ="form-control" id="FotoPerfil">
                </div>
                </div>
                
               <div class="rango">
                <label for="customRange2" class="form-label">Ingrese su nivel </label>
               <input type="range" class="form-range" id="NivelJugador">
               </div>
               <div class="row g-3">
                  <div class="col-sm-7">
                 <input type="number" class="form-control" placeholder="Goles" id="Goles" >
                </div>
                 <div class="col-sm">
                <input type="number" class="form-control"step="0.01" min="1.01" max="9.01"  placeholder="Estatura" id="Estatura" >
                </div>
                <div class="col-sm">
                <input type="number" class="form-control"   min="1" max="60" placeholder="Edad"  id="Edad">
                </div>
                </div>
                <br>               
                 <div class="row g-3">
                  <div class="col-sm-7">
                 <input type="text" class="form-control" placeholder="Pais" id="Pais" >
                </div>
                 <div class="col-sm">
                <input type="date" class="form-control"  placeholder="FechaContra" ="FechaContratacion" >
                </div>
                <br>
                <div  class="input-group mb-3">
                <select class="row g-1" id="PiernaDominante">
                <option selected>Ingrese pierna Dominante</option>
                <option value="1">Pierna Derecha</option>
                <option value="2">Pierna   Izquierda</option>
                <option value="3">Manejo De Ambas Piernas</option>
                </select>
                </div>
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Tipo Sanguineo del Jugador</label> <br>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SangreApositivo" value="option1">
                  <label class="form-check-label" for="inlineRadio1">A+</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="iSangreOpositivo" value="option2">
                  <label class="form-check-label" for="inlineRadio2">O+</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SangreBpositivo" value="option2">
                  <label class="form-check-label" for="inlineRadio2">B+</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SangreAbpositivo" value="option2">
                  <label class="form-check-label" for="inlineRadio2">AB+</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SangreAnegativo" value="option1">
                  <label class="form-check-label" for="inlineRadio1">A-</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SangreOnegativo" value="option2">
                  <label class="form-check-label" for="inlineRadio2">O-</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SangreBnegativo" value="option2">
                  <label class="form-check-label" for="inlineRadio2">B-</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SangreAbnegativo" value="option2">
                  <label class="form-check-label" for="inlineRadio2">AB-</label>
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre De Su anterior Club</label>
                <input type="text" class="form-control" id="AnteriorClub" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"> Tu nombre completo</div>
                </div>
            </form>
            <a href="#" class="btn btn-primary" id="RegristroJugador">Registral</a>
            </div>
      </div>
        `
    }
}
customElements.define("frm-jugador",FrmJugadores);