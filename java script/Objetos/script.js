//Objetos
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Grazi',
    Idade: 20,
    profissao: 'Monitora do professor bonitão',
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objeto com funçãoes ou métodos

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },
    area: function(lados){
          return lados*lados
    },
    areaDeRetangulos: function(lado1,lado2){
        return lado1 * lado2
    }
}

//Arrays

//È um grupo de valores geralmente relacionados. servm para guardamos diferentes valores em uma única variável.

var videoGames = ['PS4', 'XBox', 'switch']
console.log(videoGames.length)