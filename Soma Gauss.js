function IniciarSoma(){
    var inicial = Number(document.getElementById("ValorI").value);
    var final = Number(document.getElementById("ValorF").value);
    
    var contador = inicial;
    var acumulador = 0;

    while(contador<=final){
        acumulador+=contador
        
        contador+=1
        console.log(acumulador)
    }
        alert(acumulador)
}
