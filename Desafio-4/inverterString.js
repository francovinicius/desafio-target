function inverter_string(str) {
    /*
      Inverte os caracteres de uma string.
     */
    let reversed_str = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed_str += str[i];
    }
    return reversed_str;
  }
  
  // Exemplo de uso:
  const minha_string = 'Hello, world!';
  console.log(inverter_string(minha_string));
  