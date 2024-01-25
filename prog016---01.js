//declarar e inicializar
var nomeDosAlunos = ['Diego', 'Eduanea', 'Matheus F.', 'Matheus A.', 'Rodolfo', 'Lucas', 'Susan', 'Pablo', 'Gabriel'];
var idadeDosAlunos = [34, 18, 31, 22, 19, 23, 15, 17, 19];

//declarar
var cidadeNatalDosAlunos = [];
//inicializar um vetor já declarado
cidadeNatalDosAlunos[0]='Natal';
cidadeNatalDosAlunos[1]='Natal';

//captura o tamanho do vetor
var tamanhoDoVetorNomeDosAlunos=nomeDosAlunos.length;

//escreve o tipo de dado do vetor
console.log(typeof cidadeNatalDosAlunos);

//insere elementos no final do vetor
cidadeNatalDosAlunos.push('Campo Belo');
cidadeNatalDosAlunos.push('Natal');

//remove o elemento do final do vetor
cidadeNatalDosAlunos.pop();

//insere elemento no início do vetor
cidadeNatalDosAlunos.unshift("Konoha");
cidadeNatalDosAlunos.unshift("Natal");

//remove o elemento do início do vetor
cidadeNatalDosAlunos.shift();

//busca o índice de um elemento
console.log("índice: "+cidadeNatalDosAlunos.indexOf("Moscow"));

//varre o vetor usando for
var contador;
for(contador=0;contador<tamanhoDoVetorNomeDosAlunos;contador++){
    console.log(nomeDosAlunos[contador]+" tem "+idadeDosAlunos[contador]+" anos.");    
}

//varre o vetor usando while
contador=0;
while(contador<tamanhoDoVetorNomeDosAlunos){
    console.log(nomeDosAlunos[contador]+" tem "+idadeDosAlunos[contador]+" anos.");    
    contador++;    
}

//varrer o vetor do final para o inicio, usando o for
for(contador=(tamanhoDoVetorNomeDosAlunos-1);contador>=0;contador--){
    console.log(nomeDosAlunos[contador]+" tem "+idadeDosAlunos[contador]+" anos.");    

}