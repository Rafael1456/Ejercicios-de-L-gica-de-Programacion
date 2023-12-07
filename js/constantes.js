//Para exportar un archivo a otro tenemos que usar la siguiente sintaxis:
export const PI = 3.1416;
export let usuario = "Rafael";
let password = "Sparty";


export function saludar () {
    console.log("Hola modulos de EC6");
}/*No es necesario que tu archivo tenga una exportacion por defecto, es depende a tus necesidades en la App, es algo 
meramente opcional y otro dato importante conocer es que solamente puede haber una exportacion por default, si agregas dos
te saltara un error, tambien puedes darte cuenta de que solamente puedes exportar por defecto con la sintaxis anterior
las funcion declaradas, ya que si intentas hacerlo de esa manera con una funcion expresada o una constante o una 
variable no se podra con esta sintaxis (export default funcion declarada), para poder hacerlo seria de la manera
siguiente: */

let internet = "Ubee";
export default internet;/*Y asi de esta manera si se puede exportar por defecto, ya sea constante, variable o funcion 
expresada*/
