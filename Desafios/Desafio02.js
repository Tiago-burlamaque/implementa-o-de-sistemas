

function criarTazHeArray() {
    let gangue = ["taz"]

    if (gangue.length === 0) {
        gangue.push(gangue[0].toLowerCase())
    }

    console.log(gangue)
}

criarTazHeArray()



function removerPersonagem() {
    let gangue = ["taz", "ronaldo"]
    
    if(gangue.length > 0) {
        let ultimo = gangue[gangue.length - 1]

        if(ultimo !== "Taz") {
            gangue.pop()
        }
    }
    console.log(gangue)
}

removerPersonagem()

function removerSeMenorQue5() {
    let gangue = ["Taz", "Pernalonga", "Lola"];

    if (gangue.length > 0 && gangue[0].length < 5) {
        gangue.shift();
    }

    console.log(gangue);
}

removerSeMenorQue5();

function AdicionarTina() {
    let gangue = ["Taz", "Pernalonga", "Lola"];

    
    if(gangue[2][3] === "a") {
        gangue.push("Tina".toLowerCase())
    }
    console.log(gangue);
    
}

AdicionarTina()

function copiaLimitada() {
    let gangue = ["Taz", "Lola", "Pateta", "Mickey", "Batman", "Robin", "Tiago"];


    let filtrados = gangue.filter(nome => 
        nome.length === 5 || nome.length === 8
    )

    console.log(filtrados);
    
}

copiaLimitada()