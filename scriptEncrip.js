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

function transformarTexto(text) {
  text = text.toLowerCase();
  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return text;
}

const textarea = document.getElementById("textoIngresado");
textarea.addEventListener("input", function() {
  textarea.value = transformarTexto(textarea.value);
});

function copiarTexto() {
  const elemento = document.getElementById("textoResultado");
  navigator.clipboard.writeText(elemento.innerText);
  
  document.getElementById("MsgTCopiado").classList.add("show"); 
  
  setTimeout(function() {                                                  
      document.getElementById("MsgTCopiado").classList.remove("show"); 
  }, 2200); // 
}

function borrarTexto() {
  document.getElementById("textoIngresado").value = '';
  document.getElementById("textoResultado").innerHTML = '...';
  ChequeoRes();
  
}

const botonEncriptar = document.getElementById("botonEncriptar");  
const formulario = document.forms[0];                              
 
botonEncriptar.addEventListener("click", function() {             
    const textoIngresado = formulario["textoIngresado"].value;    
    const textoEncriptado = encriptar(textoIngresado);             
    document.getElementById("textoResultado").innerHTML = textoEncriptado;  
    ChequeoRes();

  });
        
const botonDesencriptar = document.getElementById("botonDesencriptar"); 
 
botonDesencriptar.addEventListener("click", function() {    
  const textoEncrypt = formulario["textoIngresado"].value;    
  const textoDesencriptado = desencriptar(textoEncrypt);      
  document.getElementById("textoResultado").innerHTML = textoDesencriptado;  
  ChequeoRes();
  
});
  

const botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copiarTexto);

const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", borrarTexto);






