var codigo = Math.floor(Math.random() * (999999 - 111111) + 1);
const precioticket1 = 100;
const precioIphone12 =25000;
const preciosamsungs22 =20000;
const espacio256 = 100;
const espacio512 = 150;

alert('Bienvenido Al Menu!');

//Class
class Usuario {
    constructor(nombre, apellido, email, tipoPago, ventilador){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tipoPago = tipoPago;
        this.ventilador = ventilador;
        localStorage.setItem("Nombre", `${this.nombre}` )
        localStorage.setItem("Apellido", `${this.apellido}` )

    }
    callUser() {
        return `Se han comprado: ${this.ventilador} ticket/s con el codigo: #${codigo} a nombre de: ${this.nombre} ${this.apellido}, ${this.email} SUERTE!`;
    }
    
}
//Guardar identificador de  Sorteo para Numero ganador
localStorage.setItem("Codigo", codigo)


// INICIO FUNTION SORTEO
function sorteo1(infoUser) {
    
    //INICIO  DE SWITCH =EFECTIVO O  TARJETA  + COMPROBANTE
    switch (infoUser.tipoPago)  {
        case 1:
            alert(`El Precio por ticket de ventilador es de ${precioticket1}`);
            alert(`El precio por ${infoUser.ventilador}ticket/s para Ventilador es de: ${precioticket1*infoUser.ventilador}`);
            let confirmar = parseInt(prompt('Desea Confirmar la Compra 1 SI 2 NO').toLowerCase());
            if(confirmar == 1){
                alert(infoUser.callUser());
            }
            else{
                alert('La Compra ha sido cancelada');
                }
                break;
        case 2:
            alert(`El Precio por ticket de ventilador es de ${precioticket1}`);
            alert(`El precio por ${infoUser.ventilador}ticket/s para Ventilador es de: ${precioticket1*infoUser.ventilador}`);
            let banco = prompt('Desea usar VISA? 1 SI 2 NO').toLowerCase();
            if(banco == 1){
                alert(infoUser.callUser());
            }
            else{
                alert('La Compra ha sido cancelada!');
            }
                
                break;
            default:
                alert('La opcion ingresada es invalida!');
        }
    }
    
// INICIO FUNTION E-COMMERCE  CELULAR
function celular(){
     let marca = parseInt(prompt('Ingresa la Marca deseada  Samsung 1;  Apple 2; Regresar al menu3'));

     switch (marca) {
         case 1:
             alert(`El Precio de El Samsung S22 es: ${preciosamsungs22}`);
             let espacio = prompt(`Ingrese la cantidad de espacio deseado 256/512 (Gb)`);
             if (espacio == 256)
             alert (`El costo final sera de:${preciosamsungs22+espacio256}`)

             else{
                 alert (`El costo final sera de:${preciosamsungs22+espacio512}`)
 
             }
             break;
         case 2:
             alert(`El Precio de El iPhone12 es: ${precioIphone12}`);
             let espacioiphone = prompt(`Ingrese la cantidad de espacio deseado 256/512 (Gb)`);
             if (espacioiphone == 256)
             alert (`El costo final sera de:$${precioIphone12+espacio256}`)

             else{
                 alert (`El costo final sera de:$${precioIphone12+espacio512}`)
             }
             break;
         case 3:
             break;
    }
}

//Funtion Numero Ganador  Sorteo
function ganador(infoUser){
    let numIngresado = parseInt(prompt("Ingrese su Codigo a Verificar:"))
    //Seleccionar un codigo random entre los CODIGOS guardados de local storage  y  elegir uno al azar
    let 
    //if(numIngresado  === )
}

//INPUT USIARIO
const nuevoUsuario = () =>{
    let nombre = prompt('Ingresa tu Nombre');
    let apellido =  prompt('Ingresa tu Apellido');
    let email = prompt('Ingresa tu email')
    let tipoPago = parseInt(prompt('Ingresa el metodo de pago, 1:Efectivo 2:Tarjeta'));
    let ventilador = prompt('Ingresa la  cantidad de  tickets a comprar');
    let classUsuario = new Usuario(nombre,  apellido,  email, tipoPago, ventilador)
    return(classUsuario)

}

//SELECTOR DE  MENU
function start(ingresoSorteo){
    if(ingresoSorteo  == 1){
        let infoUser = nuevoUsuario()
        console.log(infoUser.nombre)
        //alert(infoUser.sorteo1)
        sorteo1(infoUser)
    }
    else if(ingresoSorteo  == 2){
        celular()
        
    }
    else{
        alert('Hasta Luego!')
    }
}
//PROMPT SELECTOR MENU Y START FUNTION
let ingresoSorteo = prompt('Para participar en el Sorteo ingrese 1 o para ingresar al E-Commerce de Celulares ingrese 2')
start(ingresoSorteo)
