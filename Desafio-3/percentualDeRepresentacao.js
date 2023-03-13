// Define um objeto com o faturamento mensal por estado
const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53,
  };
  
  // Calcula o total do faturamento mensal da distribuidora
  const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
    (total, faturamento) => total + faturamento, 0
  );
  
  // Calcula o percentual de representação de cada estado
  const percentualPorEstado = {};
  for (const [estado, faturamento] of Object.entries(faturamentoPorEstado)) {
    const percentual = (faturamento / totalFaturamento) * 100;
    percentualPorEstado[estado] = percentual;
  }
  
  // Exibe o resultado no console
  console.log('Percentual de representação do faturamento mensal por estado:');
  for (const [estado, percentual] of Object.entries(percentualPorEstado)) {
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  