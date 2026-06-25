const produtos = {
    nome: "moto",
    marca: "Yamaha",
    valor: 18000,
    comprar: "Vou sim"
}

for (let chave in produtos) {
    console.log(`${chave}: ${produtos[chave]}`);
}

console.log(Object.keys(produtos));

console.log(Object.values(produtos));