function unirStrings(string1, string2) {
    return string1 + string2;
}

// Exemplo de uso
const resultado = unirStrings("Hello, ", "world!");
console.log(resultado); // Output: Hello, world!
function operacoesAbsolutas(num1, num2) {
    const absNum1 = Math.abs(num1);
    const absNum2 = Math.abs(num2);

    return {
        soma: absNum1 + absNum2,
        subtracao: absNum1 - absNum2,
        multiplicacao: absNum1 * absNum2,
        divisao: absNum1 / absNum2
    };
}

// Exemplo de uso
const operacoes = operacoesAbsolutas(-5, 3);
console.log(operacoes); 
// Output: { soma: 8, subtracao: 2, multiplicacao: 15, divisao: 1.6666666666666667 }