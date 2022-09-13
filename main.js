var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 2
var contador = 0

function Chutar() {
  var elementoResultado = document.getElementById("resultado")
  var chute = parseInt (document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Sublime! Você acertou e derrotou o Necromante no seu próprio jogo, você deve ser especial.";
  } else if (chute > 10) {
    elementoResultado.innerHTML = "Só são validados números de 0-10! Siga as regras ou sofra com as consequências de seus atos.";
  } else if (chute < 0) {
    elementoResultado.innerHTML = "A única coisa negativa aqui, é a sua vontade de viver pelo visto.";  
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Errou feio, errou rude! O número do Necromante é maior que esse!"; contador++;
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você errou!Você está mais próximo de perder a sua alma, o número do Necromante é menor do que o seu chute!"; contador++;
  }    

    if (contador > tentativas) {
      elementoResultado.innerHTML = "Acabaram as tentativas!  O Necromante venceu! Seu número era " + numeroSecreto + " que tal tentar novamente? Atualize a página."
    }
}