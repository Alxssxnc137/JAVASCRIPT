function somaGaus(){
var inicio = Number(document.getElementById("inicio").value);
var final = Number(document.getElementById("final").value);
console.log(inicio);
console.log(final);

var contador = inicio;
var acumulador = 0; 

while (contador<=final){
      acumulador+=contador;
    
      contador+=1;
}
alert(acumulador);





}