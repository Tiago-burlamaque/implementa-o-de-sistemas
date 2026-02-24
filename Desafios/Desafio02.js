const taz = "Taz"
const gangue = []

function criarTazHeArray() {

    if (gangue == "") {
        gangue.push(taz)
    }

    console.log(gangue)
}

criarTazHeArray()

function removerPersonagem() {
  
    if (gangue.length[-1] ==! taz) {
        gangue.pop()
    } else {
        return console.log("Taz não pode ser tirado da gangue!");
    }
}

removerPersonagem()