 /* 
 
 Condicionales:
 1 - Simple
 2 - Cpmpuesto
 3 - Anidado
 4 - Multiple
 5 - Operador Ternario

***************************

 Ciclos:

  1. FOR
  2. While
  3 . Do-While
 

 

  // 1 - Simple ****************************************************************** 

     if (true){
        console.log("Esto es verdad");
     } else {
        console.log("Esto es falso");
        
     }

     // 2 - Compuesto ****************************************

     if (true){
        console.log("Esto es verdad");
     } else {
        console.log("Esto es falso");
        
     }

 switch (key) {
    case value:
        
        break;
 
    default:
        break;
 
 // 3 - Anidado *****************************************************************

     if (true) { if (condition) {
           console.log("Esto es verdad");
     } else {

        console.log("Esto es verdad");
     }
        console.log("Esto es verdad");
     } else {
        console.log("Esto es falso");
        
     }
   
    3 - Anidado ***************************************************************** 


       5 - Operador Ternario */


         let opcion = prompt (" Ingrese una Opcion: \n1. Calcular Bruto \n2. Calcular Deducciones \n3. Calcular Auxilio de transporte\n 4. Calcular Salario N eto ")

         // console.log(typeof opcion);
         // console.log(typeof 1);
         
         let valorHora
         let cantidadHoras

         switch (opcion) {


            case "1" :
               valorHora = prompt ("Ingrese el valor de la hora: ")
               cantidadHoras = prompt ("Ingrese la cantidad de horas: ")

            if (isNaN (valorHora) || isNaN (cantidadHoras)) {
                  console.log("El  valor de la hora no correspondea un valor numerico");
                  } else {
               console.log("El salario Bruto es: " + (valorHora * cantidadHoras));
                  }
               break;

              // ********************************************************************************************
               
               case "2": 
                valorHora = prompt ("Ingrese el valor de la hora: ")
                cantidadHoras = prompt ("Ingrese la cantidad de horas: ")
                  
                 if (isNaN (valorHora) || isNaN (cantidadHoras)) {
                  console.log("El  valor de la hora no correspondea un valor numerico");
                  } else {
               console.log("Las deducciones son: " + (valorHora * cantidadHoras * 0.08));
                  }

                  // ********************************************************************************************

                  case "3": 
                      valorHora = prompt ("Ingrese el valor de la hora: ")
                      cantidadHoras = prompt ("Ingrese la cantidad de horas: ")
                  
                 if (isNaN (valorHora) || isNaN (cantidadHoras)) {
                           console.log("El  valor de la hora no corresponde a un valor numerico");
                  }  else  if  (valorHora * cantidadHoras > 1400000) {
                            console.log("Tiene Derecho a auxilio de transporte");
                   } else  {
                          console.log("Las deducciones son: " + (valorHora * cantidadHoras * 0.08));
                    } 
                        break;
           
             case "4": 
                      valorHora = prompt ("Ingrese el valor de la hora: ")
                      cantidadHoras = prompt ("Ingrese la cantidad de horas: ")
                  
                 if (isNaN (valorHora) || isNaN (cantidadHoras)) {
                           console.log("El  valor de la hora no corresponde a un valor numerico");
                  }  else  if  (valorHora * cantidadHoras > 1400000) {
                            console.log("El salario Neto es: " + (valorHora * cantidadHoras) - (valorHora * cantidadHoras * 0.08) + 200000);
                   } else  {
                          console.log("El salario Neto es: ") + (valorHora * cantidadHoras) - (valorHora * cantidadHoras * 0.08);
                    } 
                        break;

            
                        // ********************************************************************************************

                        default:
                        break;

         
         
      }