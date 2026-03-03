const lista = []

function atividade1() {
    if (lista.length === 0) {
        lista.push("Piu-Piu");
    }
    console.log(lista);
}

atividade1()

function atividade2() {
    lista.unshift("Frajola");
    console.log(lista);
}

atividade2()

function atividade3() {
    if (lista.length > 2) {
        lista = lista.filter(nome => nome !== "Frajola");
        lista.push("Frajola");
    }
    console.log(lista);
}

atividade3()


function atividade4() {
    console.log(lista.every(nome => /(.)\1/i.test(nome)));
}

atividade4()

function atividade5() {
    const gatosEAves = ["Frajola", "Piu-Piu"];
    console.log(lista.filter(nome => !gatosEAves.includes(nome)));
}

atividade5()