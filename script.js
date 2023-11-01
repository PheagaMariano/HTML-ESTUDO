document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 0 || n > 50 || isNaN(n)) return "Macaca do Carai, O Numero Deve Ser De 0 A 50!";
    if (n <= 10) return "O Pedro Vai Chorar se Ficar Sabendo Disso, Pamy!";
    if (n <= 20) return "Isso é muito pouco hein, Pamy :(";
    if (n <= 30) return "Eu Acho Que Pode Ser Mais, Pamy ";
    if (n <= 40) return "Pode Melhorar né Pamy??????";
    return "Que FoFo, Mas Claramente O Pedro Ti Gosta Mais Pamy!";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 2000)
  }