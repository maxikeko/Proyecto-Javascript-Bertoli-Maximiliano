
let total = 0;
let opcion;


//clase producto
class Producto {
 
    constructor( nombre, precio)
    {
        this.nombre=nombre;
        this.precio=parseFloat(precio);
    }

}





//creo los objetos

const mother1 =new Producto ("Mother Biostar H610MH",19150);
const mother2 =new Producto ("Mother MSI PRO B660M-G",31500);
const mother3 =new Producto ("Mother GIGABYTE Z690 GAMING X",62900);

const procesador1 =new Producto ("Procesador Intel Core i3",34500);
const procesador2 =new Producto ("Procesador Intel Core i5",43200);
const procesador3 =new Producto ("Procesador Intel Core i7",91650);

const ram1 =new Producto ("Memoria Ram Geil 8gb",6650);
const ram2 =new Producto ("Memoria Ram Team 16GB",13650);
const ram3 =new Producto ("Memoria Ram Patriot Viper 32GB",29450);

// creo un array para cargar todos los productos y mostrarlos
let todosLosProductos = [mother1,mother2,mother3,procesador1, procesador2, procesador3, ram1,ram2,ram3];


// creo una array 
// STORAGE Y JSON
//revisa si hay listaDeCompras en memoria o declara vacio 
//operador OR
let listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras1")) || [];

//si el storage es nulo entonces "carrito esta vacio" sino muestra la cantidad de objetos
//operador ternario
localStorage.getItem("listaDeCompras1")=== null ? txtmemoria.innerHTML = "Carrito está vacío." : txtmemoria.innerHTML = `Hay un carrito en memoria que tiene ${JSON.parse(localStorage.getItem("listaDeCompras1")).length} objetos.`


//tomo los botones y contenedores
const btn1 =document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");
const btn4 =document.getElementById("btn4");
const btn5 =document.getElementById("btn5");
const btn6 =document.getElementById("btn6");
const btn7 =document.getElementById("btn7");
const btn8 =document.getElementById("btn8");
const btn9 =document.getElementById("btn9");

const contenedorCompra = document.getElementById("contenedorCompra");



function alerta ()
{

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tu producto se ha añadido a la lista de compras',
    showConfirmButton: false,
    timer: 1500
  })

}



btn1.onclick = () =>
{
      alerta();
      listaDeCompras.push(mother1);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn2.onclick = () =>
{
      alerta();
      listaDeCompras.push(mother2);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn3.onclick = () =>
{
      alerta();
      listaDeCompras.push(mother3);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn4.onclick = () =>
{
      alerta();
      listaDeCompras.push(procesador1);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn5.onclick = () =>
{
      alerta();
      listaDeCompras.push(procesador2);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn6.onclick = () =>
{
      alerta();
      listaDeCompras.push(procesador3);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn7.onclick = () =>
{
      alerta();
      listaDeCompras.push(ram1);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn8.onclick = () =>
{
      alerta();
      listaDeCompras.push(ram2);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn9.onclick = () =>
{
      alerta();
      listaDeCompras.push(ram3);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
 



 btnBorrarCarrito.onclick = () =>
 {
    Swal.fire({
        title: '¿Estas seguro que quiere eliminar el carrito?',
        text: "Su carrito actual tiene "+listaDeCompras.length+" productos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminalo!!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'Tu carrito ha sido eliminado'

            
          )
          Toastify({
            text: "Se ha eliminado el carrito de compras",
            duration: 4000,
            destination: "https://www.linkedin.com/in/maximiliano-bertoli-926478244/",
            newWindow: true,
            close: true,
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
             
          }).showToast();

          localStorage.removeItem("listaDeCompras1");
        }
      })

      
    
    
 }
    
    let btnTerminar = document.getElementById("btnTerminar");
    btnTerminar.onclick = () =>
    {
        

           if(listaDeCompras.length)
            {
                 console.log(...listaDeCompras);//verifico por spread los objetos elegidos por el usuario

                let parrafo1 = document.getElementById("parrafo1");
                parrafo1.innerHTML="Tu carrito de compras es:";


              //recorro el carrito de compras mostrando los productos seleccionados con sus respectivos precios
              //ademas agrego un acumulador "total" para almacenar la suma de los precios de todos los productos del carrito
    
             for(let j=0; j<listaDeCompras.length;j++)
              {
                  let parrafo2 = document.createElement("p");
                 
                  //desestructuracion 
                 const {nombre, precio}=listaDeCompras[j];

                 parrafo2.innerHTML= "- "+nombre+" Precio: "+precio;
                 contenedorCompra.appendChild(parrafo2);
              }

               //funcion de orden superior
              listaDeCompras.forEach
                 (
                    (listaDeCompras) => 
                   {
                         total=total + listaDeCompras.precio ;  
                   }
                )

                let parrafo3 = document.createElement("p");
                parrafo3.innerHTML="Total  $ "+total;
                contenedorCompra.appendChild(parrafo3);    

            }else{
                  let parrafo4 = document.createElement("p");
                  parrafo4.innerHTML="No se ha comprado nada.";
                  contenedorCompra.appendChild(parrafo4);
            }
            let parrafo5 = document.createElement("p");
            parrafo5.innerHTML= "Gracias por utilizar nuestro programa";
            contenedorCompra.appendChild(parrafo5);
           
            let parrafo6 = document.createElement("p");
            parrafo6.innerHTML= "---------------------";
            contenedorCompra.appendChild(parrafo6);
    }    


