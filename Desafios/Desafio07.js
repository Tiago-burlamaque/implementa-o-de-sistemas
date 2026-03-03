const grupo = ["Papa-Leguas", "Frajola", "Lola"];



function atividade1() {
    if (grupo.length % 2 !== 0) {
        grupo.push("Coiote");
    }
    
    console.log(grupo);
}

atividade1()

function atividade2() {
    
    console.log(grupo.filter(nome => /[aeiou]{2}/i.test(nome)));
}

atividade2()

function atividade3() {
    if (grupo.length < 4) {
        return grupo.concat(["Pernalonga", "Taz"]);
    }
    
    console.log(grupo);
}

atividade3()

function atividade4() {
    if (grupo.some(nome => (nome.match(/l/gi) || []).length >= 2)) {
        grupo.push("Patolino");
    }
    
    console.log(grupo);
}

atividade4()

function atividade5() {
    
    console.log(grupo.indexOf("Coiote"));
}

atividade5()