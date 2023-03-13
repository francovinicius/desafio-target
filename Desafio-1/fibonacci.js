function fibonacci_sequence(n) {
    /*
     Retorna os n primeiros números da sequência de Fibonacci.
     */
    const sequence = [0, 1];
    while (sequence.length < n) {
      const next_num = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(next_num);
    }
    return sequence;
  }
  
  function pertence_sequencia_fibonacci(num) {
    /*
     Verifica se um número pertence à sequência de Fibonacci.
     */
    const sequence = fibonacci_sequence(num + 1); // considera o 0 como o primeiro número
    if (sequence.includes(num)) {
      return `${num} pertence à sequência de Fibonacci.`;
    } else {
      return `${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  // Exemplo de uso:
  console.log(pertence_sequencia_fibonacci(8));