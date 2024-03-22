function resultado(vitoria, derrota){
    let soma = vitoria - derrota
    return soma
}

 function power(){
    let nivel = resultado(116, 15)
    let rank = ""
    if (nivel <= 10 ){
        rank = "Ferro"
    }else if (nivel >= 11 && nivel <= 20){
        rank = "Bronze"
    }else if (nivel >= 21 && nivel <= 50){
        rank = "Prata"
    }else if (nivel >= 51 && nivel <= 80){
        rank = "Ouro"
    }else if (nivel >= 81 && nivel <= 90){
        rank = "Diamante"
    }else if (nivel >= 91 && nivel <= 100){
        rank = "Lendário"
    }else if (nivel >= 101){
        rank = "Imortal"
    }
    return `O Herói tem de saldo de ${nivel} está no nível de ${rank}`
}

console.log(power())