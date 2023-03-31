class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="images/fcf.png" width="80px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" data-verocultar='["#grpequipos",["#jugadores","#cuerpotec","#cuerpomd"]]'>Equipos de futbol</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  data-verocultar='["#jugadores",["#grpequipos","#cuerpotec","#cuerpomd"]]'>Jugadores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-verocultar='["#cuerpotec",["#grpequipos","#jugadores","#cuerpomd"]]'>Cuerpo tecnico</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-verocultar='["#cuerpomd",["#grpequipos","#jugadores","#cuerpotec"]]'>Cuerpo Medico</a>
                </li>
            </li>
                </ul>
            </div>
            </div>
        </nav>      
        `
    }
}

//Asociar
customElements.define("main-menu",MainMenu);