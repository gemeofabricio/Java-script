//Crie uma função matemática que retorne o perimetro de um quadrado
//Lembrando: perimetro é a soma dos quatro lados do quadrado
function perimetro(l1,l2,l3,l4){
    var total = l1 + l2 + l3 + l4;
    console.log(total)
    return total
}

//Crie uma função que retorne o seu nome completo
//ela deve possuir os parâmetros:nome e sobrenome
function nomeCompleto(nome,sobrenome){
    var somaNomes = nome + "" + sobrenome
    console.log(somaNomes)
    return somaNomes
}
    
//Crie uma função que verifica se um número é par
function par(numero){
    if(numero % 2== 0){
        console.log('Par')
    }else{
        console.log('Impar')
    }
}