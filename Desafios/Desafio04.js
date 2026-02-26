function adicionarLolaGaguinho() {
    let convidados = ['Patolino', 'Pernalonga', 'Fraude', "taz"]
    let novos = ['Lola', 'Gaguinho'];
    novos.forEach(nome => {
        if (!convidados.includes(nome)) {
            convidados.push(nome)
        }
    })
    console.log(convidados);

}

adicionarLolaGaguinho()

function separacaoPorJoin() {
    let convidados = ['Patolino', 'Pernalonga', 'Fraude', "taz"]
    console.log(`Convidados: ${convidados.join(" | ")}`);
}

separacaoPorJoin()

function removerGaguinhoUltimo() {
    let convidados = ['Patolino', 'Pernalonga', 'Fraude', "taz", "Gaguinho"]
    let ultimo = convidados[convidados.length - 1]
    if(ultimo === "Gaguinho") {
        convidados.pop()
    } else {
        console.log("Gaguinho não está em último");
    }

    console.log(convidados);
    
}

removerGaguinhoUltimo()

function letrasRepetidas() {
    let convidados = ['Patolino', 'Pernalonga', 'Fraude', "taz", "Gaguinho"]
    let repetidos = convidados.filter(nome => {
        let letras = nome.toLowerCase().split(" ");
        return letras.some((letra, index) => 
            letras.indexOf(letra) !== index
        )
    })
    console.log(`Com letras repetidas: ${repetidos}`);
}

letrasRepetidas()

function contar() {
    let convidados = ['Patolino', 'Pernalonga', 'Fraude', "taz", "Gaguinho"]
    let doisNomes = convidados.filter(nome => nome.trim().split(" ").length === 2);

    console.log(`Quantidade com duas palavras: ${doisNomes.length}`);

    return convidados;
}

contar()