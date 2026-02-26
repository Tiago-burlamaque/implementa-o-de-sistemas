const circo = []

function atividade1() {
    if (!circo.some(nome => nome.toLowerCase().includes("o"))) {
        circo.push("Lola");
    }
    console.log(circo);
}

atividade1()

function atividade2() {
    if (circo.length === 2) {
        circo.unshift("Pernalonga");
    }
    console.log(circo);
}

atividade2()

function atividade3() {
    if (circo.every(nome => /[aeiou]$/i.test(nome))) {
        circo.push("Patolino");
    }
    console.log(circo);
}

atividade3()

function atividade4() {
    console.log(circo.filter(nome => nome.length % 2 === 0));
}

atividade4()

function atividade5() {
    console.log(circo.filter(nome =>
        /^[^aeiou]/i.test(nome) && nome.length >= 6
    ));
}

atividade5()