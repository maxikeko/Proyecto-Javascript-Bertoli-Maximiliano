let total = 0;
let opcion;

alert("Hola!, recuerda abrir la consola antes para ver los console.log, gracias! \nBertoli Maximiliano.");

//clase producto
class Producto {
 
    constructor( nombre, precio)
    {
        this.nombre=nombre;
        this.precio=parseFloat(precio);
    }

    sumaIva()
    {
        return this.precio * 1.21;
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


// creo una array para cargar la lista de productos del carrito de compras seleccionados por el usuario

let listaDeCompras = [];


// creo un do...while para que el codigo se ejecute aunque sea una vez y luego si el usuario pone 
// un 2, sale del ciclo
do{

    console.log("Seleccione que producto desea comprar: ");
    
    //Creo un For para mostrar todos los productos en pantalla
    
    for(let i =0; i<todosLosProductos.length;i++){
    
        console.log((i+1)+". "+ todosLosProductos[i].nombre + " precio: $ "+ todosLosProductos[i].precio);
        
    }
    console.log((todosLosProductos.length+1) +". Salir");
    
   
    let entrada = prompt("Ingrese el numero del producto");
    
    
    //comparo si la entrada es un numero o no
    
    while((isNaN(entrada)) || (entrada < 0 ) || (entrada > todosLosProductos.length+1)){
        entrada = prompt("La opcion indicada no es un numero valido, intentelo nuevamente");
    }
    
    
    let salir = todosLosProductos.length+1;
    
    //Comparo si el numero que ingreso el usuario es diferente al numero para salir
    if ((entrada != salir) && (entrada<salir) && (entrada>0))
    {
        //Agrego la opcion indicada al array de lista de compras desde el otro array
        let indiceVector= entrada-1;

        

        listaDeCompras.push(todosLosProductos[indiceVector]);
    
        
        
        //Quito de stock el producto seleccionado de los productos disponibles(stock de productos)
        todosLosProductos.splice(indiceVector,1);
            
        
    }
    opcion = prompt("Desea seguir agregando mas productos al carrito? \n 1. Agregar mas productos \n 2. Ver carrito de compras")
    
}while(opcion!=2)// si elige 2 sale del ciclo y sigue con el codigo

if(listaDeCompras.length)
{

    console.log("Tu carrito de compras es: ");
    
    //recorro el carrito de compras mostrando los productos seleccionados con sus respectivos precios
    //ademas agrego un acumulador "total" para almacenar la suma de los precios de todos los productos del carrito
    
    for(let j=0; j<listaDeCompras.length;j++)
    {

        console.log("- "+listaDeCompras[j].nombre+" Precio: "+listaDeCompras[j].precio + " Precio con IVA " +listaDeCompras[j].sumaIva());
        
    }
    
    
    //funcion de orden superior
    listaDeCompras.forEach
    (
        (listaDeCompras) => 
        {
            total=total + listaDeCompras.sumaIva();  
        }
    )
    
    
    //muetro el total del carrito
    console.log("Total: $ "+total);

}else
{
    console.log("No se ha comprado nada.");
}


console.log("Gracias por usar nuestro programa!.");
