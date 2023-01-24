


class Productos{

    constructor( nombre , precio , talle , stock){

        this.nombre = nombre;
        this.precio= precio;
        this.talle= talle;
        this.stock= stock;


    }

    get_datos(){

        console.log("<-----Producto-------->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Talle: ", this.talle);
        console.log("Stock: ", this.stock);
        console.log("");

    }

    get_stock(){

        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }

    }

    update_stock (unidades){

        if (this.stock >= unidades){

            this.stock = this.stock - unidades
        }
        else{
            console.log("Stock insuficiente");

        }
    }



}

//Alta de productos 

let catalogo_productos = [];

catalogo_productos.push(new Productos("JEAN", 5000 , 38 , 5));
catalogo_productos.push(new Productos("JEAN", 5000 , 40 , 8));
catalogo_productos.push(new Productos("JEAN", 5000 , 42 , 4));
catalogo_productos.push(new Productos("JEAN", 5000 , 44 , 3));
catalogo_productos.push(new Productos("REMERA", 3000, 1 , 5));
catalogo_productos.push(new Productos("REMERA", 3000, 2 , 6));
catalogo_productos.push(new Productos("REMERA", 3000, 3 , 8));
catalogo_productos.push(new Productos("REMERA", 3000, 4 , 3))
catalogo_productos.push(new Productos("SWEATER", 10000, 1 , 5));
catalogo_productos.push(new Productos("SWEATER", 10000, 2 , 3));
catalogo_productos.push(new Productos("SWEATER", 10000, 3 , 4));


// fin alta de productos


// render de productos

for (let producto of catalogo_productos){

    producto.get_datos();
}

//compra de productos

function buscar_productoNombre(producto){

    return producto.nombre == compra_usuario

}

function buscar_productoTalle(producto){

    return producto.talle == opcion_talle

}

function comprar(){
    function buscar_productoNombre(producto){

        return producto.nombre == compra_usuario
    
    }
    
    function buscar_productoTalle(producto){
    
        return producto.talle == opcion_talle
    
    }


    let compra_usuario ;
    let opcion_talle ;
    let respuesta_usuario;
    let total_compra = 0;
     
    do {
        let eleccion =  prompt("Ingrese el producto que desea comprar");
        compra_usuario = eleccion.toUpperCase();
    
        let resultado_Nombre = catalogo_productos.filter(buscar_productoNombre);
        console.log(resultado_Nombre);
    
    
       
        //compra
        if ( resultado_Nombre != 0 ){
    
            opcion_talle = prompt("Ingrese el talle que desea");
    
            let resultado_Talle = resultado_Nombre.find(buscar_productoTalle);
            console.log(resultado_Talle);
        
            if( resultado_Talle != undefined){
                if( resultado_Talle.get_stock()){
    
                    let unidades = prompt("Ingrese la cantidad");
                    resultado_Talle.update_stock (unidades);
                    let precio_pto = resultado_Talle.precio;
                    total_compra = total_compra + (precio_pto * unidades);
                    
                }
            }
            else{
                console.log("No se encuentra ese talle");
            }        
        
        }
        else{
            console.log("El producto no se encuentra en el catalogo");
        }
    
        respuesta_usuario = prompt("¿Desea realizar otra compra?");
        opcion = respuesta_usuario.toUpperCase();
    
        
    } while (opcion != "NO" );
    
    
    //muestro total de la compra
    
    if (total_compra != 0){

        console.log("El total a abonar es: " , total_compra);
        console.log("¡ Gracias por su compra !");
        console.log("");
        console.log("--------STOCK DESPUES DE LA VENTA------")
    
        for (let producto of catalogo_productos){
    
            producto.get_datos();
        }
        alert("El total a abonar es: $" + total_compra);
        alert("¡ Muchas gracias por su compra !");

    }   
}




