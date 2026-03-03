let personagens = ["ronaldo", "Taz", "Fraude", "Patolino", "Piu-Piu"]


function adicionarPernalonga() {
    if (personagens[0] !== "Pernalonga") {
        personagens.push("Pernalonga")
    }
    console.log(personagens);
}

adicionarPernalonga()

function adicionarPernalonga2() {
    const aves = ["Patolino", "Piu-piu", "Gaguinho"]

    const existeAve = personagens.some(p => aves.includes(p))

    if (!existeAve) {
        personagens.unshift("Patolino")
    }
}

function removerPatolino() {
    const indice = personagens.indexOf("Patolino")

    if (indice > 2) {
        personagens.splice(indice, 1)
    }
    console.log(personagens);

}

removerPatolino()

function adicionarFrajola() {
    let gangue = ["Pernalonga", "Lola"];

    if (gangue.length >= 2) {
        gangue.push("Frajola");
    }

    return gangue;
}

console.log(adicionarFrajola());

function filtrarPorPHeVogais() {
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let personagens = ["ronaldo", "Taz", "Fraude", "Patolino", "Piu-Piu"]

    let filtrados = personagens.filter(nome => 
        nome[0] === "P" && 
        vogais.includes(nome[nome.length - 1].toLowerCase())
    )

    return filtrados
}

console.log(filtrarPorPHeVogais())

