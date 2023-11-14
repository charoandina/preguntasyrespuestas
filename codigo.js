let tiempoTerminado;
let intervaloDeTiempo;


//Segundero de 30s que comienza cuando se carga la página
function comenzarTiempo() {
    tiempoTerminado = setTimeout (tiempoCumplido, 30000);
    intervaloDeTiempo = setInterval(ticTac, 1000);
    document.getElementById("segundero").textContent = 30;
}

function ticTac(){
    let tiempo = document.getElementById("segundero").textContent;

    document.getElementById("segundero").textContent = tiempo - 1;
}

//Accion una vez pasados los 30s
function tiempoCumplido(){
    clearInterval(intervaloDeTiempo);
    document.getElementById("segundero").textContent = 0;
    document.getElementById("audioFinal").play();
    alert("GAME OVER: Se acabó el tiempo. Intentalo de nuevo!");
}

//Botones Finalizado
function finalizado(){
    clearTimeout(tiempoTerminado);
    clearInterval(intervaloDeTiempo);

    let fecha = new Date ();
    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;
    let respuesta5 = document.getElementById("respuesta5").value;

    let mensaje = fecha.toLocaleDateString("es-Es") + "\n" + 
            "1. " + respuesta1 + "\n" +
            "2. " + respuesta2 + "\n" +
            "3. " + respuesta3 + "\n" +
            "4. " + respuesta4 + "\n" +
            "5. " + respuesta5;
    alert (mensaje);
}

//Botones Volver a intentar
function volverAIntentar(){
    location.reload();
}
