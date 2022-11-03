//Funções
/*
   function nomeDaFunção (parâmetros){
     ações
   }
*/

var a = 7
var b = 8
var total = a + b
console.log(total)

function soma(c,d){
    var total = c + d
    return console.log(total)
}

soma(10,50)
soma(7,5)

//Calculo da área de um quadrado
function areaDeUmQuadrado(lado){
    var area = lado*lado;
    return console.log(area)
}
areaDeUmQuadrado(4)

//Faça uma função que calcule a área de um retangulo de lados diferentes.

function areaDeUmretangulo(lado1,lado2){
    var area = lado1*lado2;
    return console.log(area)
}
areaDeUmretangulo(4,8)

//função

function pi(){
    return 3.1415
}

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Gosta do céu'
    }else if(cor === 'verde'){
        return 'È Palmeirense'
    }else{
        return 'Você gosta de nada'
    }
}

