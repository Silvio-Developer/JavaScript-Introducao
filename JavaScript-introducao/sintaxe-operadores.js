function verificarNumeros(n1, n2){
    const frase1 = criarFrase1(n1, n2);
    const frase2 = criarFrase2(n1, n2);
    if (!n1 || !n2) return 'Defina dois números.';
    return `${frase1} ${frase2}`;
}
function criarFrase1(n1, n2){
    let igual = "";
    if (n1 !== n2){
        igual = ' não';
    }
    return `Os números ${n1} e ${n2}${igual} são iguais.`;
}
function criarFrase2(n1, n2){
    const soma = n1 + n2;
    let result10 = 'menor';
    let result20 = 'menor';
    const compare10 = soma > 10;
    const compare20 = soma > 20;

    if (compare10){
        result10 = 'maior';
    }
    if (compare20){
        result20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`
}
console.log(verificarNumeros(11, 11));
console.log(verificarNumeros(8, 8));
console.log(verificarNumeros(4, 4));
console.log(verificarNumeros(11, 12));
console.log(verificarNumeros(8, 9));
console.log(verificarNumeros(3, 6));
