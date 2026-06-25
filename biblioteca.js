const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero) {
        const livro = {
            nome,
            autor,
            ano,
            genero,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const L = this.livros[i];
            console.log(
                `${L.nome} - ${L.autor} - ${L.ano} - ${L.genero}`
            );
        }
    },

    alugar(livro) {
        for (let i = 0; i < this.livros.length; i++) {
            const L = this.livros[i];

            if (L.nome === livro) {

                if (!L.disponivel) {
                    console.log("Livro indisponível!");
                    return;
                }

                L.disponivel = false;
                L.alugado = true;
                L.vezesAlugado++;

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
    "terror cosmico"
);

biblioteca.adicionarLivros(
    "The Alchemist",
    "Paulo Coelho",
    1988,
    "Fantasia"
);

biblioteca.mostrarLivros();

biblioteca.alugar("The Alchemist");

console.log(biblioteca.livros);