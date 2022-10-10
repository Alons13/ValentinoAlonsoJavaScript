let codigo =Math.random();
let precioticket1 = 100;
let precioIphone12 =25000;
let preciosamsungs22 =20000;
let espacio256 = 100;
let espacio512 = 150;


//SALUDO AL CLIENTE
alert('Bienvenido Al Menu!');
let inputUsuario = prompt('Para  ingresar al  Sorteo(1) E-Commerce Celulares(2)').toLowerCase();

//INICIO  DE  FUNCION Y  COMIENZO  DE  INPUT  DE DATOS
function sorteo1() {
    let ventilador = prompt('Ingresa la  cantidad de  tickets a comprar');
    let nombre = prompt('Ingresa tu Nombre');
    let apellido =  prompt('Ingresa tu Apellido');
    let formadepago = parseInt(prompt('Ingresa el metodo de pago, 1:Efectivo 2:Tarjeta'));
    //INICIO  DE SWITCH =EFECTIVO O  TARJETA  + COMPROBANTE
    switch (formadepago)  {
        case 1:
            alert(`El Precio por ticket de ventilador es de ${precioticket1}`);
            alert(`El precio por ${ventilador}ticket/s para Ventilador es de: ${precioticket1*ventilador}`);
            let confirmar = parseInt(prompt('Desea Confirmar la Compra 1 SI 2 NO').toLowerCase());
            if(confirmar == 1){
                alert(`Se han comprado: ${ventilador} ticket/s con el codigo: #${codigo} a nombre de ${nombre}_${apellido} SUERTE!`);
            }
            else{
                alert('La Compra ha sido cancelada');
            }
            break;
        case 2:
            alert(`El Precio por ticket de ventilador es de ${precioticket1}`);
            alert(`El precio por ${ventilador}ticket/s para Ventilador es de: ${precioticket1*ventilador}`);
            let banco = prompt('Desea usar VISA? 1 SI 2 NO').toLowerCase();
            if(banco == 1){
                alert(`Se han comprado: ${ventilador} tickets con el codigo: #${codigo} a nombre de ${nombre}_${apellido} SUERTE!`);
            }
            else{
                alert('La Compra ha sido cancelada!');
            }
            
            break;
        default:
            alert('La opcion ingresada es invalida!');
    }
}

function celular(){
    let marca = parseInt(prompt('Ingresa la Marca deseada  Samsung 1;  Apple 2; Regresar al menu3'));

    switch (marca) {
        case 1:
            alert(`El Precio de El Samsung S22 es: ${preciosamsungs22}`);
            let espacio = prompt(`Ingrese la cantidad de espacio deseado 256/512 (Gb)`);
            if (espacio == 256)
            alert (`El costo final sera de:${preciosamsungs22}+${espacio256}`)

            else{
                alert (`El costo final sera de:${preciosamsungs22}+${espacio512}`)
 
            }
            break;
        case 2:
            alert(`El Precio de El iPhone12 es: ${precioIphone12}`);
            let espacioiphone = prompt(`Ingrese la cantidad de espacio deseado 256/512 (Gb)`);
            if (espacioiphone == 256)
            alert (`El costo final sera de:$${precioIphone12+espacio256}`)

            else{
                alert (`El costo final sera de:$${precioIphone12}+${espacio512}`)
            }
            break;
        case 3:
            break;     


    }

}
//llamar function
if(inputUsuario  == "1"){
    sorteo1()
}
if(inputUsuario == "2"){
    celular()
}
//MENSAJE DE EXIT
alert('Hasta Luego!');