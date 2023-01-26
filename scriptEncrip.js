function encriptar(texto) {
  let textoEncriptado = "";

  const claves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };

  for (let i = 0; i < texto.length; i++) {
    textoEncriptado += claves[texto[i]] || texto[i];
  }
  return textoEncriptado;
}

function desencriptar(texto) {
  const claves = {'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
  let i = true;
  let word = texto;
  if (word.length >= 1){
      while(i){
          i = false
          Object.keys(claves).forEach((letra) => {
              if (word.indexOf(letra) >= 0) {
                  word = word.replace(letra, claves[letra])
                  i = true
              }
          })
      }
     return word;
  }
} 

function ChequeoRes() {
  const text = document.getElementById("textoResultado").innerHTML;
  const initialImage = document.getElementById("ImgNotRes");
  const initialmsg = document.getElementById("TextoTipOup");
  const initialbtnC = document.getElementById("botonCopiar")
  if (text === "..." || text === "") {
    initialImage.style.display = "block";
    initialmsg.style.display = "block";
    initialbtnC.style.display ="none";
  } else {
    initialImage.style.display = "none";
    initialmsg.style.display = "none";
    initialbtnC.style.display ="block";
  }
}

function copiarTexto() {
  const elemento = document.getElementById("textoResultado");
  navigator.clipboard.writeText(elemento.innerText);
  
  document.getElementById("MsgTCopiado").classList.add("show"); // Mostrar el div que contiene el mensaje
  
  setTimeout(function() {                                         // Utilizar setTimeout para ocultar el div después de 3 o 4 segundos                       
      document.getElementById("MsgTCopiado").classList.remove("show"); 
  }, 3000); // 3000 milisegundos = 3 segundos
}

function borrarTexto() {
  document.getElementById("textoIngresado").value = '';
  document.getElementById("textoResultado").innerHTML = '...';
  ChequeoRes();
  
}

const botonEncriptar = document.getElementById("botonEncriptar");  // Obtiene el botón de encriptar 
const formulario = document.forms[0];                              // Obtiene el formulario
 
botonEncriptar.addEventListener("click", function() {              // Agrega un event listener al botón de encriptar y ejecuta la función encriptar
    const textoIngresado = formulario["textoIngresado"].value;    // Obtiene el valor del campo de texto ingresado
    const textoEncriptado = encriptar(textoIngresado);            // Encripta el texto     
    document.getElementById("textoResultado").innerHTML = textoEncriptado;  // Muestra el texto encriptado en el campo de resultado
    ChequeoRes();

  });
        
const botonDesencriptar = document.getElementById("botonDesencriptar"); // Obtiene el botón de desencriptar
 
botonDesencriptar.addEventListener("click", function() {      // Agrega un event listener al botón de desencriptar y ejecuta la funcion
  const textoEncrypt = formulario["textoIngresado"].value;    // Obtiene el valor del campo de texto ingresado.
  const textoDesencriptado = desencriptar(textoEncrypt);      // Desencripta el texto
  document.getElementById("textoResultado").innerHTML = textoDesencriptado;  // Muestra el texto desencriptado en el campo de texto resultado
  ChequeoRes();
  
});
  

const botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copiarTexto);

const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", borrarTexto);






