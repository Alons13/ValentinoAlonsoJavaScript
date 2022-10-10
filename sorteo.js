let codigo =Math.random();
let precioticket1 = 100;


//SALUDO AL CLIENTE
alert('Bienvenido Al sorteo!');
let inputUsuario = prompt('Te  Gustaria  participar del  Sorteo  SI/NO?').toLowerCase();

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
//llamar function
if(inputUsuario  == "si"){
    sorteo1()
}
//MENSAJE DE EXIT
alert('Hasta Luego!');