/*-MODULOS (IMPORT/EXPORT):
Significa que tu puedes mandar tus archivos JS no solo desde el archivo HTML si no desde un archivo JS interno
tu puedes mandar a llamar otro.
*/ 

//Para importar otro archivo a nuestro archivo principal, tendremos que escribir la siguiente sintaxis:
import internet, { PI, usuario, saludar,} from "./constantes.js";
import { aritmetica as operaciones } from "./aritmetica.js";
import Hablar from "./clases.js";

/*Para decirle al archivo en donde buscar en este caso utilizamos (./) que es como decirle a JS que busque a partir de
esta misma carpeta ya que el archivo que queremos importar en este caso se encuentra en la misma carpeta, si tendriamos
que subir de nivel a otras carpetas seria un . por cada nivel (../) y asi sucesivamente.

-En las llaves escribiremos lo que queremos importar de ese archivo, en este caso la constante PI y lo escribimos 
solamente con su nombre y tambien podemos hacerle un alias para llamarlo de otra manera en este archivo desde donde lo 
importamos solamente con poner el nombre de lo importado despues un "as" y despues el alias.
*/
console.log("Archivo modulos.js");
console.groupCollapsed("Constantes");
console.log(PI);
console.log(usuario);
console.log(internet);
console.groupEnd();
console.groupCollapsed("Aritmetica");
console.log(operaciones.sumar(9, 10));
console.log(operaciones.restar(29, 11));
console.groupEnd();
saludar();
console.groupCollapsed("Clases")
let conversacion = new Hablar();
conversacion;
console.groupEnd();

//Te quedaste pa en el min 8:00 Jon Mircha-Ejercicios de Logica de Programacion(1/10) mañana le empezamos con los ejercicios:)



