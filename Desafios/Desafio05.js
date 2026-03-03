function atividade1() {
    let membros = ["Frajola", "Taz", "Lola"];
    if (membros.length === 0 || membros.length < 5) {
        membros.push("Piu-piu")
    }
    console.log(membros);
}

atividade1()

function atividade2() {
    let membros = ["Frajola", "Taz", "Lola"];



    let categorias = {
        "Piu-Piu": "ave",
        "Ligeirinho": "roedor"
    };

    let temAveOuRoedor = membros.some(nome =>
        categorias[nome] === "ave" || categorias[nome] === "roedor"
    );

    if (temAveOuRoedor && !membros.includes("Hector")) {
        membros.push("Hector");
    }

    console.log(membros);

}

atividade2()

function atividade3() {
    let membros = ["Frajola", "Taz", "Lola"];
    let indexPiu = membros.indexOf("Piu-Piu");

    if (
        indexPiu !== -1 &&
        indexPiu < membros.length - 1 && // Piu-Piu não é o último
        membros[membros.length - 1] !== "Ligeirinho"
    ) {
        membros.splice(indexPiu + 1, 0, "Ligeirinho");
    }

    console.log(membros);

}

atividade3()

function atividade4() {
    let membros = ["Frajola", "Taz", "Lola", "Hector"];
    let indexHector = membros.indexOf("Hector");

    if (indexHector !== -1 && membros[indexHector].length % 2 !== 0) {
        membros.splice(indexHector, 1);
    }

    console.log(membros)
}

atividade4()

function atividade5() {
    let membros = ["Frajola", "Taz", "Lola", "Hector"];
    let listaMaiusculaComI = membros
        .filter(nome => nome.toLowerCase().includes("i"))
        .map(nome => nome.toUpperCase());

    console.log("Membros finais:", membros);
    console.log("Maiúsculos com I:", listaMaiusculaComI);

    return { membros, listaMaiusculaComI };

}

atividade5()