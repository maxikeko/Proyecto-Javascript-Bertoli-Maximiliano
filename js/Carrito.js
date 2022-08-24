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
localStorage.getItem("listaDeCompras1")=== null ? txtmemoria.innerHTML = "Carrito está vacío." : txtmemoria.innerHTML = `Hay un carrito pendiente que tiene ${JSON.parse(localStorage.getItem("listaDeCompras1")).length} objetos.`

btnBorrarCarrito.onclick = () =>
{
    let listaLS = localStorage.getItem("listaDeCompras1");
    //operador AND
    listaLS && alert("Carrito ya estaba vacio");
    localStorage.removeItem("listaDeCompras1");
}
    
    //DOM
    //tomo el elemento h3 llamado por su id "titulo1" y lo almaceno en una variable llamada titulo1
    let titulo1= document.querySelector("#titulo1");
    titulo1.innerHTML="Seleccione los productos que desea comprar:"; //agrego contenido al h3
    
    //DOM
    //busco el elemento contendor1
    let contenedor1= document.querySelector("#contenedor1");
    let contenedor2= document.querySelector("#contenedor2");
    //Creo un For para mostrar todos los productos en pantalla
    
    for(let i =0; i<todosLosProductos.length;i++)
    {
        //DOM
        //creo un hijos "p" en contendor1 con el comando appendChild
        let parrafo = document.createElement("p");

        //desestructuracion 
        const {nombre, precio}=todosLosProductos[i];

        parrafo.innerHTML= (i+1)+". "+ nombre + " precio: $ "+ precio;
        contenedor1.appendChild(parrafo);
       
    }
    //DOM
        
    let parrafo3 = document.querySelector(".pSelect");
    parrafo3.innerHTML="Indique el numero del producto que desea comprar:";
   
    let miformulario = document.getElementById("formulario");
    miformulario.addEventListener("submit", validarFormulario);

    function validarFormulario(e){
        
        e.preventDefault(); //evita que se refresque la pagina

        let entrada = document.querySelector("#numeroEntrada").value;

        console.log("Se agregó el numero "+entrada);// es solo para verificar
        if(entrada==""){
            let parrafo4= document.createElement("p");
            parrafo4.innerHTML= "No ha ingresado un numero, intentelo nuevamente"
            contenedor2.appendChild(parrafo4);
        }
        else{

            //Agrego la opcion indicada al array de lista de compras desde el otro array
            let indiceVector= entrada-1;
            listaDeCompras.push(todosLosProductos[indiceVector]);
            //guardar storage
            localStorage.setItem("listaDeCompras1", JSON.stringify(listaDeCompras));
            console.log(localStorage.getItem("listaDeCompras1"));//simplemente verifico en consola 
            txtcarrito.innerHTML= "Su carrito actual tiene "+listaDeCompras.length+" productos";
        }
       
    }        
        

    let btnTerminar = document.getElementById("termina");
    btnTerminar.onclick = () =>
    {
        
            //desabilito los botones al terminar
            document.querySelector("#btnAgregar").disabled= true;
            document.querySelector("#termina").disabled= true;


            //elimino el carrito del storage cuando la compra ha terminado.
            localStorage.removeItem("listaDeCompras1");

            

            if(listaDeCompras.length){
                console.log(...listaDeCompras);//verifico por spread los objetos elegidos por el usuario

                let parrafo6 = document.createElement("p");
                parrafo6.innerHTML="Tu carrito de compras es:";
                contenedor2.appendChild(parrafo6);

               //recorro el carrito de compras mostrando los productos seleccionados con sus respectivos precios
              //ademas agrego un acumulador "total" para almacenar la suma de los precios de todos los productos del carrito
    
             for(let j=0; j<listaDeCompras.length;j++)
              {

                let parrafo7 = document.createElement("p");

                //desestructuracion 
                const {nombre, precio}=listaDeCompras[j];

                parrafo7.innerHTML= "- "+nombre+" Precio: "+precio;
                contenedor2.appendChild(parrafo7);

              }

                //funcion de orden superior
                listaDeCompras.forEach
                (
                    (listaDeCompras) => 
                    {
                        total=total + listaDeCompras.precio ;  
                    }
                )

                let parrafo8 = document.createElement("p");
                parrafo8.innerHTML="Total  $ "+total;
                contenedor2.appendChild(parrafo8);

            }else{
                let parrafo9 = document.createElement("p");
                parrafo9.innerHTML="No se ha comprado nada.";
                contenedor2.appendChild(parrafo9);
            }

            let parrafo5= document.createElement("p");
            parrafo5.innerHTML= "Gracias por utilizar nuestro programa";
            contenedor2.appendChild(parrafo5);
             
    }    


