var getPrecio = document.getElementById('informegeneral');
var getdescuento = document.getElementById('descuento');
var getinfodestelas1 = document.getElementById('infodestelas1');
function changeTablerouno(){
    if(getPrecio){
        document.getElementById('tablerouno').style.display = "block";
        document.getElementById('tablerodos').style.display = "none";
        document.getElementById('tablerotres').style.display = "none";
    }
}
function changeTablerodos(){
    if(getdescuento){
        document.getElementById('tablerouno').style.display = "none";
        document.getElementById('tablerodos').style.display = "block";
        document.getElementById('tablerotres').style.display = "none"    }
}
function changeinfodestelas1(){
    if(getinfodestelas1){
        document.getElementById('tablerouno').style.display = "none";
        document.getElementById('tablerodos').style.display = "none";
        document.getElementById('tablerotres').style.display = "block";
    }
}
/*var getPrecio = document.getElementById('informegeneral');function mostrartableros() {    let informegeneral = document.getElementById('tablerodos');    informegeneral.style.display = 'none';    let mostarinfo1 = document.getElementById('tablerodos')    mostarinfo1.addEventListener('click', seleccionarMascotaJugador)}*/