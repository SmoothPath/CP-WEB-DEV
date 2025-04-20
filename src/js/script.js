
function print(idDiv, titulo, conteudo) {

  const destino = document.getElementById(idDiv);

  destino.innerHTML += `<h3>${titulo}</h3><p>${conteudo}</p>`;
}

// EXERCICIO 1 - DECLARE VARIAVÉIS COM VALOR undefined, vazio e com valor 

function exercicio1(){
// Variável ainda não recebeu valor (undefined)
let vinhoSelecionado;
console.log("Vinho selecionado:", vinhoSelecionado); // undefined

// Variável com valor nulo (vazio intencional)
let sugestaoSommelier = null;
console.log("Sugestão do sommelier:", sugestaoSommelier); // null

// Variável com valor definido
let anoReserva = 2020;
console.log("Ano da reserva do vinho:", anoReserva); // 2020

print("ex1","Exercício 1", `
  Vinho selecionado: ${vinhoSelecionado} <br>
  Sugestão do sommelier: ${sugestaoSommelier} <br>
  Ano da reserva do vinho: ${anoReserva}
  `);
}


// EXERCICIO 2 - Como usar o operador os operadores( != , ==, >= ) em JavaScript? Exemplifique e demonstre a saída!

function exercicio2(){
// >= Verificando idade mínima para degustação
let idade1 = 20;
console.log("O cliente pode degustar vinhos? " + (idade1 >= 18));

// == Verificando se o vinho é o favorito
let vinhoFavorito = "Merlot";
console.log("O vinho selecionado é o favorito da casa? " + (vinhoFavorito == "Merlot"));

// != Verificando se o vinho escolhido não é o que está fora de estoque
let vinhoEscolhido = "Cabernet";
console.log("O vinho escolhido está fora de estoque? " + (vinhoEscolhido != "Cabernet"));

print("ex2","Exercício 2", `
  O cliente pode degustar vinhos? ${idade1 >= 18} <br>
  O vinho selecionado é o favorito da casa? ${vinhoFavorito == "Merlot"} <br>
  O vinho escolhido está fora de estoque? ${vinhoEscolhido != "Cabernet"}
  `);
}


// Exercicio 3 - IMC

function exercicio3(){
// Vinheria Angello: evento de bem-estar com avaliação de IMC
let peso = parseFloat(prompt("Digite o seu peso para o cadastro na Vinheria SmoothPath:"));
let altura = parseFloat(prompt("Digite sua altura com o padrão 0.00:"));
let imc = peso / (altura ** 2);
let imcMensagem;

switch(true) {
  case (imc < 18.5):
    imcMensagem = "Atenção: Você está abaixo do peso ideal! Na Vinheria SmoothPath, temos vinhos suaves e opções leves para acompanhar sua saúde.";
    console.log("Atenção: Você está abaixo do peso ideal! Na Vinheria SmoothPath, temos vinhos suaves e opções leves para acompanhar sua saúde.")
    break;

  case (imc >= 18.5 && imc < 24.9):
    imcMensagem ="Parabéns! Você está com peso normal. Aproveite a degustação de vinhos da Vinheria SmoothPath com equilíbrio.";
    console.log("Parabéns! Você está com peso normal. Aproveite a degustação de vinhos da Vinheria SmoothPath com equilíbrio.")
    break;

  case (imc >= 25 && imc < 29.9):
    imcMensagem ="Atenção: Você está com sobrepeso. Nossa equipe recomenda moderação, até na escolha dos vinhos.";
    console.log("Atenção: Você está com sobrepeso. Nossa equipe recomenda moderação, até na escolha dos vinhos.")
    break;

  case (imc >= 30):
    imcMensagem = "Atenção: Você está na faixa de obesidade. Consulte um especialista antes de participar da degustação.";
    console.log("Atenção: Você está na faixa de obesidade. Consulte um especialista antes de participar da degustação.")
    break;
  default:
      imcMensagem = "Não foi possível calcular seu IMC corretamente. Tente novamente.";  
}
print("ex3","Exercício 3", `Seu IMC é ${imc.toFixed(2)} - ${imcMensagem}`);

}



// Exercício 4 - Programa que conta até 50

function exercicio4(){
  console.log("Contagem de garrafas numeradas para o estoque da Vinheria SmoothPath:");

for (let i = 0; i <= 50; i++) {
  console.log("O valor é: " + i + "!");
}
print("ex4","Exercício 4", "Presente no console!")
}
 
 // Exercício 5 - Recebe um usuário e senha e verifica se correspondem ao nome de usuário e senha cadastrados
function exercicio5(){
 const usuarioCad = "admin";
 const senhaCad = "1234";

 let nome = prompt("Seja bem-vindo à Vinheria SmoothPath!\nSiga as instruções a seguir para realizar seu login\nDigite seu nome de usuário: ");
 let senha = prompt("Digite sua senha: ");
 let login;

 if(nome == usuarioCad && senha == senhaCad){
  login = "Login realizado com sucesso!";

 } 
 else{
  login = "Erro: Falha de autenticação";
  console.log("Não foi possível realizar login!")
 }
 print("ex5","Exercício 5", login);
}

 //Exercicio 6 calcule a média de 7 notas, e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado
 function exercicio6(){

 let n1 = parseFloat(prompt("Digite a avaliação do vinho 1 (de 0 a 10): "));
 let n2 = parseFloat(prompt("Digite a avaliação do vinho 2 (de 0 a 10): "));
 let n3 = parseFloat(prompt("Digite a avaliação do vinho 3 (de 0 a 10): "));
 let n4 = parseFloat(prompt("Digite a avaliação do vinho 4 (de 0 a 10): "));
 let n5 = parseFloat(prompt("Digite a avaliação do vinho 5 (de 0 a 10): "));
 let n6 = parseFloat(prompt("Digite a avaliação do vinho 6 (de 0 a 10): "));
 let n7 = parseFloat(prompt("Digite a avaliação do vinho 7 (de 0 a 10): "));
 
 function media(n1, n2, n3, n4, n5, n6, n7) {
     return (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;
 }
 
 let resultadoMedia = media(n1, n2, n3, n4, n5, n6, n7);
  let situacao;
 
 if (resultadoMedia >= 7.0) { 
     situacao = "O vinho foi aprovado! Ele tem boas avaliações.";
 } else {
     situacao = "O vinho foi reprovado. Ele precisa melhorar!";
    
 }

print("ex6","Exercício 6", `Média: ${resultadoMedia.toFixed(2)} - ${situacao}`);
console.log(situacao);
 }


//Exercicio 7 Crie um programa que imprima o seu nome, idade, curso e ano um embaixo do outro
function exercicio7(){
let nomeVinharia = prompt("Digite o nome da vinícola: ");
console.log(nomeVinharia);

let anoFundacao = prompt("Digite o ano de fundação da vinícola: ");
console.log(anoFundacao);

let tipoVinho = prompt("Digite o tipo de vinho produzido: ");
console.log(tipoVinho);

let avaliacaoMedia = prompt("Digite a avaliação média dos vinhos (de 0 a 10): ");
console.log(avaliacaoMedia)

print("ex7","Exercício 7", `
  ${nomeVinharia} <br>
  Fundada em: ${anoFundacao} <br>
  Tipo: ${tipoVinho} <br>
  Avaliação: ${avaliacaoMedia}
  `);
} 

 //Exercicio 8 crie um programa utilizando a base de texto seguinte
 function exercicio8(){
 console.log("Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.")

 let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas."

 console.log("Localização da primeira posição de 'em': " + texto.indexOf("em"))
 
 console.log("Localização da última posição de 'ia': " + texto.lastIndexOf("ia"))
 
 console.log("Localização da palavra 'ciência': " + texto.indexOf("ciência",))
 
 console.log("Localização da palavra 'métodos': " + texto.indexOf("métodos"))

 print("ex8","Exercício 8", `
  Posição de 'em': ${texto.indexOf("em")}<br>
  Localização da última posição de 'ia': ${texto.lastIndexOf("ia")}<br>
  Localização da palavra 'ciência':  ${texto.indexOf("ciência")}<br>
  Localização da palavra 'métodos':  ${texto.indexOf("métodos")}
  `);
 } 
 
 // EXERCICIO 9 - UTILIZE FLOAT PARA STRING COM DADOS DA VARIAVEL 
 function exercicio9(){
 let precoVinho = "150.50";
 console.log("Preço do vinho: ");
 console.log(parseFloat(precoVinho));
 console.log(typeof(parseFloat(precoVinho)));
 
 let qtdGarrafas = "100";
 console.log(parseFloat(qtdGarrafas));
 console.log(typeof(parseFloat(qtdGarrafas)));
 
 let valorTotal = "3000.75";
 console.log("Valor total:")
 console.log(parseFloat(valorTotal));
 console.log(typeof(parseFloat(valorTotal)));
 
 print("ex9","Exercício 9 - string para float", `
  Preço: ${parseFloat(precoVinho)} <br> 
  ${typeof parseFloat(precoVinho)}<br><br>

  Quantidade: ${parseFloat(qtdGarrafas)}<br>
   ${typeof parseFloat(qtdGarrafas)}<br><br>

  Valor total: ${parseFloat(valorTotal)} <br>
  ${typeof parseFloat(valorTotal)}
  `);
 }