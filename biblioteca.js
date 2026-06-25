const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero, estoque) {
        const livro = {
            nome,
            autor,
            ano,
            genero,
            estoque,
            disponivel: estoque > 0,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const L = this.livros[i];
            console.log(
                `${L.nome} - ${L.autor} - ${L.ano} - ${L.genero} - Estoque: ${L.estoque}`
            );
        }
    },

    alugar(livro) {
        for (let i = 0; i < this.livros.length; i++) {
            const L = this.livros[i];

            if (L.nome === livro) {

                if (L.estoque <= 0) {
                    console.log("Livro indisponível!");
                    return;
                }

                L.estoque--;
                L.vezesAlugado++;

                if (L.estoque === 0) {
                    L.disponivel = false;
                }

                console.log("Livro alugado com sucesso!");
                return;
            }
        }

        console.log("Livro não encontrado!");
    }
};

biblioteca.adicionarLivros(
    "The Call of Cthulhu",
    "H. P. Lovecraft",
    1928,
    "terror cosmico",
    3
);

biblioteca.adicionarLivros(
    "The Alchemist",
    "Paulo Coelho",
    1988,
    "Fantasia",
    2
);

biblioteca.mostrarLivros();

biblioteca.alugar("The Alchemist");

console.log(biblioteca.livros);