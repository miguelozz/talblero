var getPrecio = document.getElementById('precio');
var getdescuento = document.getElementById('descuento');

function changeTablerouno(){

    if(getPrecio){

        document.getElementById('tablerouno').style.display = "block";
        document.getElementById('tablerodos').style.display = "none";

    }
}



function changeTablerodos(){

    if(getdescuento){

        document.getElementById('tablerouno').style.display = "none";
        document.getElementById('tablerodos').style.display = "block";

    }
}