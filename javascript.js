document.getElementById("mensagem").style.display = "none";
document.getElementById("copiar").style.display = "none";

function btnEncriptar() {
  elementos_visiveis();
  var texto = document.getElementById("texto").value;
  var textoEncriptado = encriptar(texto);
  document.getElementById('mensagem').value = textoEncriptado;
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  elementos_visiveis();
  var texto = document.getElementById("texto").value;
  var textoDesencriptado = desencriptar(texto);
  document.getElementById('mensagem').value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

    }
  }
  return stringDesencriptada;
}

function elementos_visiveis() {
  document.getElementById("mensagem").style.display = "inline";
  document.getElementById("copiar").style.display = "inline";
  document.getElementById("foto_direito").style.display = "none";
  document.getElementById("titulo_direito").style.display = "none";
  document.getElementById("texto_direito").style.display = "none";
}

function copiar() {
  var textoResultado = document.getElementById("mensagem").value;
  navigator.clipboard.writeText(textoResultado);
  console.log("Texto copiado com sucesso!")
}
