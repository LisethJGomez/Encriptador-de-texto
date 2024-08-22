// Función para cifrar usando el Cifrado César
function encriptar() {
  let mensaje = document.getElementById('entrada').value;
  let desplazamiento = 3; // Puedes cambiar el desplazamiento aquí si lo deseas
  let resultado = cifrarCesar(mensaje, desplazamiento);
    mostrarResultado(resultado);
}

// Función para descifrar usando el Cifrado César
function desencriptar() {
  let mensaje = document.getElementById('entrada').value;
  let desplazamiento = 3; // Debe ser el mismo desplazamiento utilizado para cifrar
  let resultado = descifrarCesar(mensaje, desplazamiento);
    mostrarResultado(resultado);
}

// Función que realiza el cifrado César
function cifrarCesar(mensaje, desplazamiento) {
  return mensaje.split('').map(letra => {
      if (letra >= 'a' && letra <= 'z') {
          let codigo = letra.charCodeAt(0);
          return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
      }
      return letra;
  }).join('');
}

// Función que realiza el descifrado César
function descifrarCesar(mensaje, desplazamiento) {
  return mensaje.split('').map(letra => {
      if (letra >= 'a' && letra <= 'z') {
          let codigo = letra.charCodeAt(0);
            return String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
        }
      return letra;
  }).join('');
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(resultado) {
  let subtSalida = document.getElementById('subtSalida');
  let salida = document.getElementById('salida');
  let botonCopiar = document.getElementById('botonCopiar');
  
  subtSalida.innerText = "Resultado:";
  salida.innerText = resultado;
  botonCopiar.style.visibility = 'visible';
}

// Función para copiar el texto del resultado
function copiar() {
  let texto = document.getElementById('salida').innerText;
  navigator.clipboard.writeText(texto).then;
}