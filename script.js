/*
    ** Jogo da adivinhação **

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"
    
    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

    Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você advinhou o número em x tentativas"

    substitua o "x" da mensagem, pelo número de tentativas

*/

let numeroQueEstouPensando = Number(prompt('"Advinhe o número que estou pensando? Está entre 0 e 10"'))

let numeroAleatorio = Math.round(Math.random() * 11)
console.log(numeroAleatorio)

let xAttempts = 1;

while(numeroQueEstouPensando !== numeroAleatorio){
  numeroQueEstouPensando  = Number(prompt('"Advinhe o número que estou pensando? Está entre 0 e 10"'))

  xAttempts++
}

alert(`Parabéns! o número que eu pensei foi${numeroAleatorio} Você advinhou o número em ${xAttempts} tentativas`)
