document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 0 || n > 50 || isNaN(n)) return "Macaca do Carai, O Numero Deve Ser De 0 A 50!";
    if (n == 0) return "0?? Não sabo se vc acha isso mesmo, pedro macaco triste..."
    if (n <= 10) return "Menos de 11????, Pedro macaco triste";
    if (n <= 20) return "Isso é muito pouco Pamy crl, vc tem mais uma chance";
    if (n <= 30) return "Eu sei que vc consegue acertar, Pamy, tenta de novo!!";
    if (n <= 49) return "Passou perto, mas ainda não é isso!!!!";
    return "Acertou! Que Fofo kkkkk, mas claramente eu ti gosto mt mais que isso fedorenta, sinto sua falta!";
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