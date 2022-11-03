//Array
//È um grupo de valores. Servem para guardamos diferentes valores em uma única variável.
/*var videoGames = ['Switch', 'Ps4', 'Xbox'];

var numeros = [1,2,3]
console.log(videoGames[0])
console.log(videoGames[1])
console.log(videoGames[3])

console.log(numeros[0]+numeros[2])
*/


/*var i = 0
while(i<10){
    console.log(i);
    i = i + 1
}*/


/*for (var i = 0; i <10; i = i+1){
    console.log(i)
}*/

var videoGames = ['Switch', 'Ps4', 'Xbox', '3ds'];

/*//ForEach
//forEach é um método que executa uma função para cada item array. È uma forma mais simples de utilizarmos um loop com arrays
videoGames.forEach(function(a, b, c){
    console.log(a, b, c)
})*/

//crie uma array com os anos que o Brasil ganhou a copa 1958, 1962, 1970, 1994, 2002
var brasil = ['1958','1962','1970','1994','2002']
console.log (brasil)

//Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `o brasil ganhou a copa de ${ano}`.forEach(element => {
  brasil.forEach(function(c){
    console.log('O Brasil ganhou a copa', + c)
  })