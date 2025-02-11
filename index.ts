// 1) Cálculo da variável SOMA
function calcularSoma(): number {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return SOMA;
}
console.log("SOMA:", calcularSoma());

// 2) Verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero: number): boolean {
    let a = 0, b = 1, temp;
    while (b < numero) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b === numero || numero === 0;
}

const numeroTeste = 21;
console.log(`O número ${numeroTeste} ${pertenceFibonacci(numeroTeste) ? "pertence" : "não pertence"} à sequência de Fibonacci.`);

// 3) Análise de faturamento diário
const faturamentoDiario = [1200, 800, 0, 2500, 1800, 0, 2000, 500, 3000, 1000];

function analisarFaturamento(faturamento: number[]): void {
    const diasUteis = faturamento.filter(valor => valor > 0);
    const menor = Math.min(...diasUteis);
    const maior = Math.max(...diasUteis);
    const media = diasUteis.reduce((acc, val) => acc + val, 0) / diasUteis.length;
    const acimaMedia = diasUteis.filter(valor => valor > media).length;

    console.log(`Menor faturamento: R$${menor}`);
    console.log(`Maior faturamento: R$${maior}`);
    console.log(`Dias acima da média: ${acimaMedia}`);
}

analisarFaturamento(faturamentoDiario);

// 4) Percentual de faturamento por estado
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento: Record<string, number>): void {
    const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

calcularPercentual(faturamentoEstados);

// 5) Inverter string sem usar reverse()
function inverterString(str: string): string {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const texto = "TypeScript";
console.log(`String invertida: ${inverterString(texto)}`);
