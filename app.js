function apenasMinusculas(event) {
  const charCode = event.which || event.keyCode;
  const charStr = String.fromCharCode(charCode);

  const charLowerCase = charStr.toLowerCase();

  const acentos = {
    â: "a",
    á: "a",
    ê: "e",
    é: "e",
    í: "i",
    î: "i",
    ô: "o",
    ó: "o",
    û: "u",
    ú: "u",
  };

  if (/[^a-z\s]/.test(charLowerCase) || acentos[charStr]) {
    event.preventDefault();
    return false;
  }
  return true;
}

function inputCleaner() {
  const inputElement = document.getElementById("input-text");
  inputElement.value = "";
}

function criptografar() {
  const inputElement = document.getElementById("input-text");
  const textoOriginal = inputElement.value.toLowerCase();
  let textoCriptografado = "";

  for (let i = 0; i < textoOriginal.length; i++) {
    const char = textoOriginal[i];
    switch (char) {
      case "e":
        textoCriptografado += "enter";
        break;
      case "i":
        textoCriptografado += "imes";
        break;
      case "a":
        textoCriptografado += "ai";
        break;
      case "o":
        textoCriptografado += "ober";
        break;
      case "u":
        textoCriptografado += "ufat";
        break;
      default:
        textoCriptografado += char;
    }
  }

  document.getElementById("texto-criptografado").textContent =
    textoCriptografado;
  inputCleaner();
}

function descriptografar() {
  const inputElement = document.getElementById("input-text");
  const textoCriptografado = inputElement.value.toLowerCase();
  let textoOriginal = "";
  let i = 0;

  while (i < textoCriptografado.length) {
    const char = textoCriptografado[i];
    console.log("letra: ", textoCriptografado);
    switch (char) {
      case "a":
        if (textoCriptografado.slice(i, i + 2) === "ai") {
          console.log("letra: ", char);
          textoOriginal += "a";
          i++;
        } else {
          textoOriginal += char;
        }
        break;
      case "e":
        if (textoCriptografado.slice(i, i + 5) === "enter") {
          textoOriginal += "e";
          i += 4;
        } else {
          textoOriginal += char;
        }
        break;
      case "i":
        if (textoCriptografado.slice(i, i + 4) === "imes") {
          textoOriginal += "i";
          i += 3;
        } else {
          textoOriginal += char;
        }
        break;
      case "o":
        if (textoCriptografado.slice(i, i + 4) === "ober") {
          textoOriginal += "o";
          i += 3;
        } else {
          textoOriginal += char;
        }
        break;
      case "u":
        if (textoCriptografado.slice(i, i + 4) === "ufat") {
          textoOriginal += "u";
          i += 3;
        } else {
          textoOriginal += char;
        }
        break;
      default:
        textoOriginal += char;
    }

    i++;
  }

  document.getElementById("texto-criptografado").textContent = textoOriginal;
}

function copyEncriptedText() {
  const textoCriptografado = document.getElementById(
    "texto-criptografado"
  ).textContent;
  navigator.clipboard.writeText(textoCriptografado);
}

const copyButton = document.getElementById("copy-btn");
const myDiv = document.querySelector(".div-copied-text");

copyButton.addEventListener("click", () => {
  myDiv.style.display = "block";
  setTimeout(() => {
    myDiv.style.display = "none";
  }, 2000);
});
