const contenedorCompra = document.getElementById("contenedorCompra");
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

//array vacio para almacenar el Fetch
let todosLosProductos= [];



 function porFavorAnda (){
//fetch

      //ABRA EL LIVE SERVER O NO FUNCIONA EL FETCH EN ARCHIVOS LOCALES
      fetch('json/data.json')
          .then( (res) =>  res.json())
          .then( (data) => {
      
            
            
              data.forEach((producto) => {
                  
                  todosLosProductos.push(producto);
              })
          })
}

porFavorAnda();



// STORAGE Y JSON
//revisa si hay listaDeCompras en memoria o declara vacio 
//operador OR
let listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras1")) || [];

//si el storage es nulo entonces "carrito esta vacio" sino muestra la cantidad de objetos
//operador ternario
localStorage.getItem("listaDeCompras1")=== null ? txtmemoria.innerHTML = "Carrito está vacío." : txtmemoria.innerHTML = `Hay un carrito en memoria que tiene ${JSON.parse(localStorage.getItem("listaDeCompras1")).length} objetos.`


//tomo los botones 
const btn1 =document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");
const btn4 =document.getElementById("btn4");
const btn5 =document.getElementById("btn5");
const btn6 =document.getElementById("btn6");
const btn7 =document.getElementById("btn7");
const btn8 =document.getElementById("btn8");
const btn9 =document.getElementById("btn9");




//sweet alert
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


//funcionalidad de los botones
btn1.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[0]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn2.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[1]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn3.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[2]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn4.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[3]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn5.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[4]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn6.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[5]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn7.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[6]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn8.onclick = () =>
{
      alerta();
      listaDeCompras.push(todosLosProductos[7]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
}
btn9.onclick = () =>
{

      alerta();
      listaDeCompras.push(todosLosProductos[8]);
      //guardar storage
      localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
      txtmemoria.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";

}
 
//funcion ver carrito
btnVerCarrito.onclick=()=>{
      
      RecorrerCarrito();
}

//funcion borrar carrito
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
    
//funcion recorrer carrito
function RecorrerCarrito(){
      for(let j=0; j<listaDeCompras.length;j++)
      {
    
          let parrafo2 = document.createElement("p");
        
          parrafo2.innerHTML= "- "+listaDeCompras[j].nombre+" Precio: "+listaDeCompras[j].precio;
        
          contenedorCompra.appendChild(parrafo2);
      }
}


 //boton terminar compra
    let btnTerminar = document.getElementById("btnTerminar");
    btnTerminar.onclick = () =>
    {
        

           if(listaDeCompras.length)
            {
                 console.log(...listaDeCompras);//verifico por spread los objetos elegidos por el usuario

                let parrafo1 = document.getElementById("parrafo1");
                parrafo1.innerHTML="\n Tu carrito de compras es:";


              //recorro el carrito de compras mostrando los productos seleccionados con sus respectivos precios
              //ademas agrego un acumulador "total" para almacenar la suma de los precios de todos los productos del carrito
    
           
              RecorrerCarrito();

               //funcion de orden superior
              listaDeCompras.forEach
                 (
                    (listaDeCompras) => 
                   {
                         total +=Number(listaDeCompras.precio)  ;  
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


