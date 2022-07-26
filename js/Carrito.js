
 let opcion;
 let resultado=0;

 //funcion para verificar que es una opcion correcta
 function verificar(opcion){
    if(+opcion){
        if((opcion<1) || (opcion>4))
        {
            //el numero ingresado no es valido regresa false
            return false;
        }
        else {
            return true;
        }
    }else
    {
        //la opcion indicada no es un numero retorna false
        return false;
    }
}

//clase producto
class Producto {
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}

do{
    
    alert("Bienvenido al simulador de carrito de compras. \nAqui simularemos comprar las partes de una computadora (motherboard, procesador y ram).");
    opcion = prompt("Comenzemos con las placas madres, elige una dependiendo el presupuesto que quieras gastar: \n1. Mother Biostar H610MH $ 19.150 \n2. Mother MSI PRO B660M-G $ 31.500 \n3. Mother GIGABYTE Z690 GAMING X $62.900 \n\n4. Salir" );
    
    //llamo la funcion verificar
    if (verificar(opcion))
    {
        alert("Usted ha ingresado la opcion "+opcion);
    }
    else
    {
        alert("La opcion indicada es incorrecta, ingrese los numeros validos que aparecen en patalla");
    }

}while(!(verificar(opcion)))   //repite si la opcion es false (es decir que no es una opcion valida)
    
if(opcion==4){
    alert("Usted ha salteado este producto..");
}
else{
    
    // creo una mother en base a la opcion elegida
    
    if(opcion==1)
    {
        const mother = new Producto("Mother biostar", 19150)
        resultado=resultado+mother.precio;
        alert("Usted ha elegido "+mother.nombre+ " a un precio de "+mother.precio+" en total es "+resultado);
    }else if(opcion==2)
    {
        const mother =new Producto("Mother MSI",31500)
        resultado=resultado+mother.precio;
        alert("Usted ha elegido "+mother.nombre+ " a un precio de "+mother.precio+" en total es "+resultado);
    }else
    {
        const mother =new Producto("Mother Gigabyte",62900)
        resultado=resultado+mother.precio;
        alert("Usted ha elegido "+mother.nombre+ " a un precio de "+mother.precio+" en total es "+resultado);
    }


    do{
    
        opcion = prompt("Ahora elige un procesador: \n1. Procesador Intel Core i3 $ 34.500   \n2. Procesador Intel Core i5 $43.200   \n3. Procesador Intel Core i7 $91.650 \n\n4. Salir" );
        
        //llamo la funcion verificar
        if (verificar(opcion))
        {
            alert("Usted ha ingresado la opcion "+opcion);
        }
        else
        {
            alert("La opcion indicada es incorrecta, ingrese los numeros validos que aparecen en patalla");
        }
    
    }while(!(verificar(opcion)))   //repite si la opcion es false (es decir que no es una opcion valida)



    if(opcion==4)
    {
        alert("Usted ha salteado este producto..");
    }
    else
    {
        
        // creo un procesador en base a la opcion elegida
       
        if(opcion==1)
        {
            const procesador = new Producto("Procesador I3", 34500)
            resultado=resultado+procesador.precio;
            alert("Usted ha elegido "+procesador.nombre+ " a un precio de "+procesador.precio+" en total es "+resultado);
        }else if(opcion==2)
        {
            const procesador =new Producto("Procesador I5",43200)
            resultado=resultado+procesador.precio;
            alert("Usted ha elegido "+procesador.nombre+ " a un precio de "+procesador.precio+" en total es "+resultado);
        }else
        {
            const procesador =new Producto("Procesador I7",91650)
            resultado=resultado+procesador.precio;
            alert("Usted ha elegido "+procesador.nombre+ " a un precio de "+procesador.precio+" en total es "+resultado);
        }
    }






    //--------------------------
    do{
    
        opcion = prompt("Ahora elige una Ram: \n1. Memoria Geil 8gb $ 6.650   \n2. Memoria Team 16GB $ 13.650  \n3. Memoria Patriot Viper 32GB $ 29.450 \n\n4. Salir" );
        
        //llamo la funcion verificar
        if (verificar(opcion))
        {
            alert("Usted ha ingresado la opcion "+opcion);
        }
        else
        {
            alert("La opcion indicada es incorrecta, ingrese los numeros validos que aparecen en patalla");
        }
    
    }while(!(verificar(opcion)))   //repite si la opcion es false (es decir que no es una opcion valida)



    if(opcion==4)
    {
        alert("Usted ha salteado este producto..");
    }
    else
    {
        
        // creo una Memoria Ram en base a la opcion elegida
       //$ 6.650   \n2. Memoria Team 16GB $ 13.650  \n3. 29450
        if(opcion==1)
        {
            const ram = new Producto("Ram Geil 8gb", 6650)
            resultado=resultado+ram.precio;
            alert("Usted ha elegido "+ram.nombre+ " a un precio de "+ram.precio+" en total es "+resultado);
        }else if(opcion==2)
        {
            const ram =new Producto("Ram Team 16gb",13650)
            resultado=resultado+ram.precio;
            alert("Usted ha elegido "+ram.nombre+ " a un precio de "+ram.precio+" en total es "+resultado);
        }else
        {
            const ram =new Producto("Ram Patriot 32gb",29450)
            resultado=resultado+ram.precio;
            alert("Usted ha elegido "+ram.nombre+ " a un precio de "+ram.precio+" en total es "+resultado);
        }
    }


   
    
    alert("El costo total de todos los componentes es de $ "+resultado);
             
    for(let i=1; i<4; i++)
    {
        alert("A las "+i);
        
    }

    alert("Gracias por usar este programa, hasta pronto!");









}








