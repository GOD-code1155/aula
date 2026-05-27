function somarTudo (...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
  }
  
  console.log (somarTudo(1, 2, 3, 4));
  