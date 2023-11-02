document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 0 || n > 50 || isNaN(n)) return "Macaca do Carai, O Numero Deve Ser De 0 A 50!";
    if (n == 0) return "VSF MACACA, eu vou chorar se ficar sabendo que vc colocou 0, Pamy!"
    if (n <= 10) return "Menos de 11, Que miseria hein kkkkk sfd";
    if (n <= 20) return "Isso é muito pouco Pamy crl";
    if (n <= 30) return "Eu acho que pode ser mais, Pamy";
    if (n <= 49) return "Pode melhorar né Pamy??????";
    return "Que Fofo kkkkk, mas claramente eu ti gosto mt mais que isso fedorenta, sinto sua falta!";
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
    }, 6000)
    var meuAudio = document.getElementById('meuAudio');
    meuAudio.play()
  }