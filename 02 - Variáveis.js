let nome = prompt("Qual o seu nome? ")
let idade = prompt("Quantos anos você tem? ")
let linguagem = prompt("Qual linguagem de programação você está estudando? ")

console.log(`\nOlá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!\n`)

let pergunta = parseInt(prompt(`Você gosta de estudar ${linguagem} Responda com o número 1 para SIM ou 2 para NÃO: `));

while (pergunta != 1 && pergunta != 2)
{
    console.log("Você digitou um valor inválido. ")
    pergunta = parseInt(prompt(`Você gosta de estudar ${linguagem} Responda com o número 1 para SIM ou 2 para NÃO: `));
}

if(pergunta ===  1)
{
    console.log('\nMuito bom! Continue estudando e você terá muito sucesso.');
}
else
{
    console.log('\nAhh que pena... Já tentou aprender outras linguagens?');
}