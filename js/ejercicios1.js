function contarCaracteres (cadena) {try {
    if (typeof cadena != "string"){
        throw new Error("Lo que ingresaste no es texto");
    } else {
        let caracteres = cadena.length;
       console.log(`La cadena de texto tiene ${caracteres} caracteres.`);
    }
} catch (error) {
    console.log(`Se produjo un error: ${error}`);
 } 
}

contarCaracteres("Hola mi querido Jon Mircha");



 
