//tipo de dados 

//Todos são Primitivos exceto os objetos.
var nome = "João" // String
var idade = 16 //number
var VerdadeiroOuFalso = true // Boolean
var time; //Underfined
var comida = null // null
var novoObjeto = {} // object

//objetos
    const Alunos = {
        NomeDoaluno:  'Erick',
        IdadeDoAluno:  16,
        TimeDoAluno: false,
    }

console.log(Alunos.NomeDoaluno)

//Verificar os tipos de dados
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof novoObjeto);

//Você pode somar e assim concatenar as palavras.

var nome2 = "Fabrício"
var sobrenome = "Pereira"
var nomeCompleto = nome2 + " " + sobrenome;
console.log(nomeCompleto) 

//você pode somar números com strings, o resultado final será sempre uma string.
var gols = 1000;
var frase = 'Pelé fez ' + gols + ' gols'
console.log(frase)

//Template String
var golacos = 1000;
var frase2 = `Fabrício Pereira fez mais de ${golacos} gols`
console.log(frase2);





//declare uma variável contendo uma string
let carro = "voyage"


//declare uma variável contendo um número dentro de uma string
let NumeroString = "22";


//declare uma variável com a sua idade
var MinhaIdade = 26;


//Declare duas variaveis,uma com seu nome  e outra com seu sobrenome e some as mesmas
var MeuNome = "Fabircio"
var MeuSobrenome = "Pereira"
var MeuNomeCompleto = MeuNome + " " + MeuSobrenome


//coloque a seguinte frase em uma variável : It´s time
let ItsTime = "Its time"


//verifique o tipo da variável que contém o seu nome
console.log(typeof MeuNomeCompleto)





//var numero = prompt("digite um valor");
//console.log(numero)

//Faça um programa que peça dois números para o usuário.Imprima(console.log) a soma desses dois números.

//Criar dois prompt dento de variáveis
let x = parseInt (prompt("Digite o 1º valor"))
let y = parseInt (prompt("Digite o 2º valor"))

//Somar os resultados
let soma = x + y
console.log(soma)