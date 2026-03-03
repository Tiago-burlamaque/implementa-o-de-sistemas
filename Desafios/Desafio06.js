let corredores = ["Ligeirinho"];
function atividade1() {

    if (corredores.length >= 1) {
        corredores.push("Papa-Léguas", "Frajola");
    }
    console.log(corredores)
}

atividade1()
function atividade2() {
    // 2️⃣ Ordene alfabeticamente apenas a partir do segundo elemento
    let primeiro = corredores[0];
    let restoOrdenado = corredores.slice(1).sort();

    corredores = [primeiro, ...restoOrdenado];
    console.log(corredores);

}

atividade2()

function atividade3() {
    // 3️⃣ Inverta o array somente se o primeiro nome tiver mais de 6 letras
    if (corredores[0].length > 6) {
        corredores.reverse();
    }
    console.log(corredores);
    
}

atividade3()

function atividade4() {

    // 4️⃣ Pegue apenas os 2 primeiros lugares após ordenar novamente
    let doisPrimeiros = [...corredores].sort().slice(0, 2);
    console.log(doisPrimeiros);
}

atividade4()

function atividade5() {

    
    let ultimo = corredores[corredores.length - 1];
    let primeiraLetra = ultimo[0].toLowerCase();
    let doisPrimeiros = [...corredores].sort().slice(0, 2);
    let vogais = ["a", "e", "i", "o", "u"];
    
    if (!vogais.includes(primeiraLetra)) {
        corredores.pop();
    }
    
    console.log("Corredores finais:", corredores);
    console.log("Top 2:", doisPrimeiros);
    
    return { corredores, doisPrimeiros };
}

atividade5()