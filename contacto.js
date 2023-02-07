let pedidoCliente= localStorage.getItem("pedido");
//console.log(pedidoCliente);

let pedido = JSON.parse(pedidoCliente);

let detalle = document.getElementById("detalle");
detalle.value= "TOTAL: "+ pedido.total + '\n' + "CANTIDAD DE PRENDAS: "+ pedido.cantidadPrendas + '\n' ;


function enviarDatos(){

    let nombreCliente = document.getElementById("nombre").value;
    let apellidoCliente = document.getElementById("apellido").value;
    let mailCliente = document.getElementById("mail").value;

    
    let cliente ={
        "nombre": nombreCliente,
        "apellido": apellidoCliente,
        "mail": mailCliente,
        "pedido": pedidoCliente
    }

    console.log("DATOS ", cliente);
    localStorage.setItem("datosCliente", JSON.stringify(cliente));

}

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click" , enviarDatos);