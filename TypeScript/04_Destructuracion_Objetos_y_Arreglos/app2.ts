//Sintaxis de la destructuracion de arreglos ES SECUENCIAL
let avengers:string[] = ["Thor","Steve","Tony"];

//variables desordenadas
//let [thor, tony, steve] = avengers;

//con solo una variable
let [ , , ironman]= avengers;

console.log(ironman);
