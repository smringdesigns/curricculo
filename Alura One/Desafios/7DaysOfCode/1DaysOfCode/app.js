/* Tu tarea de hoy es reescribir el código a continuación para que imprima 
la información de manera correcta, que tenga sentido y sin errores 


                               *** Igualdad Entre Valores ***

*/

// Variables
let numeroUn = 1;
let stringUn = "1";
let numeroTreinta = 30;
let stringTreinta = "30";
let numeroDiez = 10;
let stringDiez = "10";

    // Comparación entre numeroUn y stringUn, luego imprimir en consola.
    // Se usa == para comparar solo valores, ignorando tipos
    if (numeroUn == stringUn) { 
        console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
    } else {
        console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
    };

    // Comparación entre numeroTreinta y stringTreinta, luego imprimir en consola.
    // Se usa == para comparar solo valores, ignorando tipos
    if (numeroTreinta === stringTreinta) { 
        console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
    } else {
        console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
    };

    // Comparación entre numeroDiez y stringDiez, luego imprimir en consola.
    // Se usa == para comparar solo valores, ignorando tipos
    if (numeroDiez == stringDiez) { 
        console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
    } else {
        console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
    };