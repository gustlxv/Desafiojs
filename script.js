const divContainer = document.querySelector(".container");

const btns = [
  {
    nome: "Ex. 1 - Antecessor",
    func: () => {
      /* erro: estava somando 1, mas antecessor é menos 1 */
      const valor = Number(prompt("Digite um número:"));
      alert(`O antecessor de ${valor} é ${valor - 1}`);
    },
  },
  {
    nome: "Ex. 2 - Área Retângulo",
    func: () => {
      /* erro: este exercício já estava correto */
      const base = Number(prompt("Digite a base:"));
      const altura = Number(prompt("Digite a altura:"));
      alert(`A área é ${base * altura}`);
    },
  },
  {
    nome: "Ex. 3 - Maior que 10",
    func: () => {
      /* erro: usava >= 10, mas maior que 10 não inclui o 10 */
      const valor = Number(prompt("Digite um número:"));
      alert(valor > 10 ? "É MAIOR QUE 10!" : "NÃO É MAIOR QUE 10!");
    },
  },
  {
    nome: "Ex. 4 - Positivo ou Negativo",
    func: () => {
      /* erro: não tratava o zero separadamente */
      const valor = Number(prompt("Digite um número:"));
      alert(valor > 0 ? "Positivo" : valor < 0 ? "Negativo" : "Zero");
    },
  },
  {
    nome: "Ex. 5 - Pode Votar?",
    func: () => {
      /* erro: este exercício já estava correto */
      const anoAtual = Number(prompt("Ano atual:"));
      const nascimento = Number(prompt("Ano de nascimento:"));
      const idade = anoAtual - nascimento;
      alert(idade >= 16 ? "Pode votar." : "Não pode votar.");
    },
  },
  {
    nome: "Ex. 6 - Soma",
    func: () => {
      /* erro: este exercício já estava correto */
      const a = Number(prompt("Digite o 1º número:"));
      const b = Number(prompt("Digite o 2º número:"));
      alert(`Soma: ${a + b}`);
    },
  },
  {
    nome: "Ex. 7 - Divisão",
    func: () => {
      /* erro: a condição da divisão por zero estava invertida */
      const a = Number(prompt("Digite o dividendo:"));
      const b = Number(prompt("Digite o divisor:"));
      alert(b !== 0 ? `Resultado: ${a / b}` : "Divisão por zero!");
    },
  },
  {
    nome: "Ex. 8 - Subtração",
    func: () => {
      /* erro: este exercício já estava correto */
      const a = Number(prompt("Digite o primeiro número:"));
      const b = Number(prompt("Digite o segundo número:"));
      alert(`Resultado: ${a - b}`);
    },
  },
  {
    nome: "Ex. 9 - Multiplicação",
    func: () => {
      /* erro: estava usando divisão em vez de multiplicação */
      const a = Number(prompt("Digite o primeiro número:"));
      const b = Number(prompt("Digite o segundo número:"));
      alert(`Resultado: ${a * b}`);
    },
  },
  {
    nome: "Ex. 10 - Maior entre 2",
    func: () => {
      /* erro: não comparava qual dos dois números era maior */
      const a = Number(prompt("Digite o primeiro número:"));
      const b = Number(prompt("Digite o segundo número:"));
      alert(a === b ? `${a} e ${b} são iguais` : a > b ? `${a} é maior` : `${b} é maior`);
    },
  },
  {
    nome: "Ex. 11 - 1 a 10",
    func: () => {
      /* erro: o laço parava no 9, faltava mostrar o 10 */
      let resultado = "";
      for (let i = 1; i <= 10; i++) resultado += i + " ";
      alert(resultado);
    },
  },
  {
    nome: "Ex. 12 - Soma 1 a 100",
    func: () => {
      /* erro: este exercício já estava correto */
      let soma = 0;
      for (let i = 0; i <= 100; i++) soma += i;
      alert(`Soma: ${soma}`);
    },
  },
  {
    nome: "Ex. 13 - 100 a 1",
    func: () => {
      /* erro: começava em 101, mas deveria começar em 100 */
      let resultado = "";
      for (let i = 100; i >= 1; i--) resultado += i + " ";
      alert(resultado);
    },
  },
  {
    nome: "Ex. 14 - Pares até 50",
    func: () => {
      /* erro: este exercício já estava correto */
      let pares = [];
      for (let i = 1; i <= 50; i++) if (i % 2 === 0) pares.push(i);
      alert(pares.join(", "));
    },
  },
  {
    nome: "Ex. 15 - Múltiplos de 5",
    func: () => {
      /* erro: este exercício já estava correto */
      let multiplos = [];
      for (let i = 1; i <= 100; i++) if (i % 5 === 0) multiplos.push(i);
      alert(multiplos.join(", "));
    },
  },
  {
    nome: "Ex. 16 - Quantos Pares (10 nums)",
    func: () => {
      /* erro: contava ímpares em vez de pares */
      let pares = 0;
      for (let i = 0; i < 10; i++) {
        let num = Number(prompt(`Digite o número ${i + 1}:`));
        if (num % 2 === 0) pares++;
      }
      alert(`Quantidade de pares: ${pares}`);
    },
  },
  {
    nome: "Ex. 17 - Maior de 5 números",
    func: () => {
      /* erro: começava com 0 e podia errar se todos fossem negativos */
      let maior = -Infinity;
      for (let i = 0; i < 5; i++) {
        let num = Number(prompt(`Digite o número ${i + 1}:`));
        if (num > maior) maior = num;
      }
      alert(`Maior número: ${maior}`);
    },
  },
  {
    nome: "Ex. 18 - Média de 5 Notas",
    func: () => {
      /* erro: pedia 6 notas, mas a média era de 5 */
      let soma = 0;
      for (let i = 0; i < 5; i++) {
        soma += Number(prompt(`Digite a nota ${i + 1}:`));
      }
      alert(`Média: ${(soma / 5).toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 19 - Ordem Crescente?",
    func: () => {
      /* erro: este exercício já estava correto */
      let nums = [];
      for (let i = 0; i < 5; i++) {
        nums.push(Number(prompt(`Digite o número ${i + 1}:`)));
      }
      let crescente = nums.every((val, i, arr) => i === 0 || arr[i - 1] < val);
      alert(
        crescente ? "Está em ordem crescente." : "Não está em ordem crescente."
      );
    },
  },
  {
    nome: "Ex. 20 - Soma até 0",
    func: () => {
      /* erro: este exercício já estava correto */
      let soma = 0;
      let num = Number(prompt("Digite um número (0 para parar):"));
      while (num !== 0) {
        soma += num;
        num = Number(prompt("Digite um número (0 para parar):"));
      }
      alert(`Soma total: ${soma}`);
    },
  },
  {
    nome: "Ex. 21 - Nomes com A",
    func: () => {
      /* erro: filtrava nomes com B e pedia 6 nomes */
      let nomes = [];
      for (let i = 0; i < 5; i++) {
        let nome = prompt(`Digite o nome ${i + 1}:`);
        if (nome.toLowerCase().startsWith("a")) nomes.push(nome);
      }
      alert(`Nomes com A: ${nomes.join(" - ")}`);
    },
  },
  {
    nome: "Ex. 22 - Contar vogais",
    func: () => {
      /* erro: não contava vogais maiúsculas e dava erro sem vogais */
      const texto = prompt("Digite um texto:");
      const vogais = texto.match(/[aeiou]/gi) || [];
      alert(`Quantidade de vogais: ${vogais.length}`);
    },
  },
  {
    nome: "Ex. 23 - Número primo",
    func: () => {
      /* erro: não testava divisores corretamente para saber se era primo */
      const num = Number(prompt("Digite um número:"));
      let primo = num > 1;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) primo = false;
      }
      alert(primo ? "É primo" : "Não é primo");
    },
  },
  {
    nome: "Ex. 24 - Inverter nome",
    func: () => {
      /* erro: não invertia o nome */
      const nome = prompt("Digite seu nome:");
      alert(`Nome invertido: ${nome.split("").reverse().join("")}`);
    },
  },
  {
    nome: "Ex. 25 - Tabuada",
    func: () => {
      /* erro: usava sinal de soma e parava antes do 10 */
      const num = Number(prompt("Digite um número para ver a tabuada:"));
      let resultado = "";
      for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
      }
      alert(resultado);
    },
  },
  {
    nome: "Ex. 26 - Média enquanto positivo",
    func: () => {
      /* erro: o contador começava em 1 e deixava a média errada */
      let soma = 0;
      let cont = 0;
      let num;
      do {
        num = Number(
          prompt("Digite um número positivo (negativo para parar):")
        );
        if (num >= 0) {
          soma += num;
          cont++;
        }
      } while (num >= 0);
      alert(`Média: ${(soma / cont).toFixed(1)}`);
    },
  },
  {
    nome: "Ex. 27 - Encontrar número em array",
    func: () => {
      /* erro: comparava texto com número no array */
      const lista = [3, 7, 9, 12, 15];
      const busca = Number(prompt("Digite um número para buscar:"));
      alert(lista.includes(busca) ? "Encontrado" : "Não encontrado");
    },
  },
  {
    nome: "Ex. 28 - Fatorial",
    func: () => {
      /* erro: o laço parava antes de multiplicar pelo próprio número */
      let n = Number(prompt("Digite um número para calcular o fatorial:"));
      let fat = 1;
      for (let i = 1; i <= n; i++) fat *= i;
      alert(`Fatorial de ${n} é ${fat}`);
    },
  },
  {
    nome: "Ex. 29 - Converter temperatura",
    func: () => {
      /* erro: a fórmula de Celsius para Fahrenheit estava errada */
      const c = Number(prompt("Digite a temperatura em Celsius:"));
      const f = (c * 9) / 5 + 32;
      alert(`${c}°C = ${f.toFixed(2)}°F`);
    },
  },
  {
    nome: "Ex. 30 - Dias da semana",
    func: () => {
      /* erro: somava 1 no índice e mostrava o dia errado */
      const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
      const n = Number(prompt("Digite um número de 0 a 6:"));
      alert(dias[n] ?? "Dia inválido");
    },
  },
  {
    nome: "Ex. 31 - Palíndromo",
    func: () => {
      /* erro: comparava minúsculo com maiúsculo */
      const palavra = prompt("Digite uma palavra:").toLowerCase();
      const invertida = palavra.split("").reverse().join("");
      alert(palavra === invertida ? "É um palíndromo" : "Não é um palíndromo");
    },
  },
  {
    nome: "Ex. 32 - Soma de Pares",
    func: () => {
      /* erro: somava ímpares em vez de pares */
      let soma = 0;
      for (let i = 1; i <= 10; i++) {
        const num = Number(prompt(`Número ${i}:`));
        if (num % 2 === 0) soma += num;
      }
      alert(`Soma dos pares: ${soma}`);
    },
  },
  {
    nome: "Ex. 33 - Média Idades",
    func: () => {
      /* erro: dividia por 4, mas eram 5 idades */
      let soma = 0;
      for (let i = 0; i < 5; i++) soma += Number(prompt(`Idade ${i + 1}:`));
      alert(`Média das idades: ${(soma / 5).toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 34 - Soma até negativo",
    func: () => {
      /* erro: o while começava falso e não perguntava nada */
      let soma = 0;
      let n = 0;
      while (true) {
        n = Number(prompt("Digite um número (negativo para parar):"));
        if (n < 0) break;
        if (n >= 0) soma += n;
      }
      alert(`Soma total: ${soma}`);
    },
  },
  {
    nome: "Ex. 35 - Contar palavras",
    func: () => {
      /* erro: diminuía 1 da quantidade de palavras */
      const frase = prompt("Digite uma frase:");
      const palavras = frase.trim().split(/\s+/);
      alert(`Número de palavras: ${palavras.length}`);
    },
  },
  {
    nome: "Ex. 36 - Notas >= 7",
    func: () => {
      /* erro: usava > 7, mas deveria aceitar nota 7 também */
      let count = 0;
      for (let i = 0; i < 6; i++) {
        if (Number(prompt(`Nota ${i + 1}:`)) >= 7) count++;
      }
      alert(`${count} notas são maiores ou iguais a 7`);
    },
  },
  {
    nome: "Ex. 37 - Multiplicação acumulada",
    func: () => {
      /* erro: total começava em 0, zerando a multiplicação */
      let total = 1;
      for (let i = 0; i < 4; i++) total *= Number(prompt(`Número ${i + 1}:`));
      alert(`Multiplicação total: ${total}`);
    },
  },
  {
    nome: "Ex. 38 - Par ou ímpar",
    func: () => {
      /* erro: testava divisibilidade por 3 em vez de 2 */
      const n = Number(prompt("Digite um número:"));
      alert(n % 2 === 0 ? "Par" : "Ímpar");
    },
  },
  {
    nome: "Ex. 39 - Converter para maiúsculas",
    func: () => {
      /* erro: convertia para minúsculas, não maiúsculas */
      const texto = prompt("Digite um texto:");
      alert(texto.toUpperCase());
    },
  },
  {
    nome: "Ex. 40 - Contar letras",
    func: () => {
      /* erro: contava palavras, não letras */
      const palavra = prompt("Digite uma palavra:");
      alert(`Quantidade de letras: ${palavra.replace(/\s/g, "").length}`);
    },
  },
  {
    nome: "Ex. 41 - Tabuada",
    func: () => {
      /* erro: faltava converter o número digitado para Number */
      const n = prompt("Digite um número para ver sua tabuada:"); 
      let resultado = "";
      for (let i = 1; i <= 10; i++) {
        resultado += `${n} x ${i} = ${n * i}\n`; 
      }
      alert(resultado);
    },
  },
  {
    nome: "Ex. 42 - Fatorial",
    func: () => {
      /* erro: este exercício já estava correto */
      const n = Number(prompt("Digite um número para calcular o fatorial:"));
      let fat = 1;
      for (let i = 1; i <= n; i++) fat *= i;
      alert(`Fatorial de ${n} é ${fat}`);
    },
  },
  {
    nome: "Ex. 43 - Nomes com A",
    func: () => {
      /* erro: não aceitava nomes com A maiúsculo */
      const nomes = prompt("Digite nomes separados por vírgula:").split(",");
      const filtrados = nomes.filter((n) =>
        n.trim().toLowerCase().startsWith("a") 
      );
      alert(`Nomes que começam com A: ${filtrados.join(", ")}`);
    },
  },
  {
    nome: "Ex. 44 - Média até 0",
    func: () => {
      /* erro: comparava texto com número e somava string */
      let soma = 0,
        count = 0;
      while (true) {
        const n = Number(prompt("Digite um número (0 para parar):")); 
        if (n === 0) break;
        soma += n;
        count++;
      }
      alert(
        count ? `Média: ${(soma / count).toFixed(2)}` : "Nenhum número válido"
      );
    },
  },
  {
    nome: "Ex. 45 - Contar vogais",
    func: () => {
      /* erro: dava erro quando não encontrava vogais */
      const texto = prompt("Digite um texto:"); 
      const vogais = texto.match(/[aeiou]/gi) || [];
      alert(`Quantidade de vogais: ${vogais.length}`); 
    },
  },
  {
    nome: "Ex. 46 - Nomes invertidos",
    func: () => {
      /* erro: split sem separador não dividia o nome */
      const nome = prompt("Digite seu nome completo:");
      const invertido = nome.split(" ").reverse().join(" "); 
      alert(`Nome invertido: ${invertido}`);
    },
  },
  {
    nome: "Ex. 47 - Soma array fixo",
    func: () => {
      /* erro: reduce sem valor inicial podia dar erro em array vazio */
      const numeros = [1, 2, 3, 4, 5];
      const soma = numeros.reduce((acc, n) => acc + n); 
      alert(`Soma: ${soma}`);
    },
  },
  {
    nome: "Ex. 48 - Procurar em array",
    func: () => {
      /* erro: comparava busca minúscula com nomes maiúsculos */
      const nomes = ["Ana", "João", "Pedro", "Maria"];
      const busca = prompt("Quem você quer procurar?");
      alert(
        nomes.map((nome) => nome.toLowerCase()).includes(busca.toLowerCase()) 
          ? `${busca} está na lista`
          : `${busca} não está na lista`
      );
    },
  },
  {
    nome: "Ex. 49 - Maior número",
    func: () => {
      /* erro: não convertia os valores para número */
      const numeros = prompt("Digite números separados por vírgula:")
        .split(","); 
      alert(`Maior número: ${Math.max(...numeros)}`);
    },
  },
  {
    nome: "Ex. 50 - Números ímpares",
    func: () => {
      /* erro: faltava converter o valor digitado para Number */
      const impares = [];
      for (let i = 0; i < 5; i++) {
        const n = prompt("Digite um número:"); 
        if (n % 2 !== 0) impares.push(n);
      }
      alert(`Ímpares digitados: ${impares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 51 - Número Primo",
    func: () => {
      /* erro: números menores que 2 também apareciam como primos */
      const n = Number(prompt("Digite um número:"));
      let primo = n > 1; 
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          primo = false;
          break;
        }
      }
      alert(primo ? "É primo" : "Não é primo");
    },
  },
  {
    nome: "Ex. 52 - Média Ponderada",
    func: () => {
      /* erro: faltava converter as notas para Number */
      const n1 = prompt("Nota 1:"); 
      const n2 = prompt("Nota 2:");
      const n3 = prompt("Nota 3:");
      const media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
      alert(`Média Ponderada: ${media.toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 53 - Maior de 3 números",
    func: () => {
      /* erro: este exercício já estava correto */
      const n1 = Number(prompt("Número 1:"));
      const n2 = Number(prompt("Número 2:"));
      const n3 = Number(prompt("Número 3:"));
      const maior = Math.max(n1, n2, n3);
      alert(`Maior: ${maior}`);
    },
  },
  {
    nome: "Ex. 54 - Celsius para Fahrenheit",
    func: () => {
      /* erro: faltava converter Celsius para Number */
      const c = prompt("Temperatura em Celsius:"); 
      const f = (c * 9) / 5 + 32;
      alert(`${c}°C = ${f}°F`);
    },
  },
  {
    nome: "Ex. 55 - Fahrenheit para Celsius",
    func: () => {
      /* erro: faltava converter Fahrenheit para Number */
      const f = prompt("Temperatura em Fahrenheit:"); 
      const c = ((f - 32) * 5) / 9;
      alert(`${f}°F = ${c.toFixed(2)}°C`);
    },
  },
  {
    nome: "Ex. 56 - Contar negativos",
    func: () => {
      /* erro: faltava converter o valor digitado para Number */
      let count = 0;
      for (let i = 0; i < 5; i++) {
        const n = prompt("Digite um número:"); 
        if (n < 0) count++;
      }
      alert(`Negativos digitados: ${count}`);
    },
  },
  {
    nome: "Ex. 57 - Somar positivos",
    func: () => {
      /* erro: contava zero como positivo */
      let soma = 0;
      for (let i = 0; i < 5; i++) {
        const n = Number(prompt("Digite um número:"));
        if (n >= 0) soma += n; 
      }
      alert(`Soma dos positivos: ${soma}`);
    },
  },
  {
    nome: "Ex. 58 - Nome ao contrário",
    func: () => {
      /* erro: string não tem reverse direto */
      const nome = prompt("Digite seu nome:");
      alert(`Ao contrário: ${nome.split("").reverse().join("")}`); 
    },
  },
  {
    nome: "Ex. 59 - Contagem regressiva",
    func: () => {
      /* erro: este exercício já estava correto */
      let contagem = [];
      for (let i = 10; i >= 1; i--) {
        contagem.push(i);
      }
      alert(contagem);
    },
  },
  {
    nome: "Ex. 60 - Diferença entre dois números",
    func: () => {
      /* erro: faltava converter os valores para Number */
      const n1 = prompt("Digite o primeiro número:");
      const n2 = prompt("Digite o segundo número:");
      alert(`Diferença: ${Math.abs(n1 - n2)}`); 
    },
  },
  {
    nome: "Ex. 61 - Verificar vogal",
    func: () => {
      /* erro: não tratava vogal maiúscula */
      const letra = prompt("Digite uma letra:").toLowerCase(); 
      alert("aeiou".includes(letra) ? "É uma vogal" : "Não é uma vogal");
    },
  },
  {
    nome: "Ex. 62 - Verificar par ou ímpar",
    func: () => {
      /* erro: faltava converter o valor digitado para Number */
      const n = prompt("Digite um número:"); 
      alert(n % 2 === 0 ? "Par" : "Ímpar");
    },
  },
  {
    nome: "Ex. 63 - Soma até N",
    func: () => {
      /* erro: não somava o próprio N */
      const n = Number(prompt("Digite um número:"));
      let soma = 0;
      for (let i = 1; i <= n; i++) soma += i; 
      alert(`Soma de 1 até ${n}: ${soma}`);
    },
  },
  {
    nome: "Ex. 64 - Fatorial",
    func: () => {
      /* erro: faltava converter o valor digitado para Number */
      let n = prompt("Digite um número:"); 
      let fat = 1;
      for (let i = 2; i <= n; i++) fat *= i;
      alert(`Fatorial de ${n}: ${fat}`);
    },
  },
  {
    nome: "Ex. 65 - Contar vogais",
    func: () => {
      /* erro: dava erro quando não encontrava vogais */
      const texto = prompt("Digite um texto:"); 
      const vogais = texto.match(/[aeiou]/gi) || [];
      alert(`Vogais: ${vogais.length}`); 
    },
  },
  {
    nome: "Ex. 66 - Mostrar pares até N",
    func: () => {
      /* erro: faltava converter o valor digitado para Number */
      const n = prompt("Digite um número:");
      let pares = [];
      for (let i = 2; i <= n; i += 2) pares.push(i);
      alert(`Pares até ${n}: ${pares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 67 - Mostrar ímpares até N",
    func: () => {
      /* erro: não incluía o próprio N quando ele era ímpar */
      const n = Number(prompt("Digite um número:"));
      let impares = [];
      for (let i = 1; i <= n; i += 2) impares.push(i);
      alert(`Ímpares até ${n}: ${impares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 68 - Repetir nome",
    func: () => {
      /* erro: faltava converter a quantidade para Number */
      const nome = prompt("Digite seu nome:");
      const vezes = prompt("Quantas vezes repetir?");
      alert(Array(vezes).fill(nome).join("\n"));
    },
  },
  {
    nome: "Ex. 69 - Converter minutos em horas",
    func: () => {
      /* erro: faltava converter minutos para Number */
      const min = prompt("Digite minutos:");
      const horas = Math.floor(min / 60);
      const resto = min % 60;
      alert(`${min} minutos = ${horas}h e ${resto}min`);
    },
  },
  {
    nome: "Ex. 70 - Calcular IMC",
    func: () => {
      /* erro: faltava converter o peso para Number */
      const peso = prompt("Digite seu peso (kg):");
      const altura = Number(prompt("Digite sua altura (m):"));
      const imc = peso / (altura * altura);
      alert(`IMC: ${imc.toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 71 - Dobrar valores de array",
    func: () => {
      /* erro: mostrava original e dobrado trocados */
      const arr = [1, 2, 3, 4, 5];
      const dobrado = arr.map((n) => n * 2);
      alert(`Original: ${arr}\nDobrados: ${dobrado}`);
    },
  },
  {
    nome: "Ex. 72 - Filtrar maiores que 10",
    func: () => {
      /* erro: usava >= 10, mas o enunciado pede maiores que 10 */
      const arr = [5, 12, 8, 130, 44];
      const maiores = arr.filter((n) => n > 10);
      alert(`Maiores que 10: ${maiores}`);
    },
  },
  {
    nome: "Ex. 73 - Encontrar nome 'Ana'",
    func: () => {
      /* erro: procurava ana minúsculo em uma lista com Ana maiúsculo */
      const nomes = ["Carlos", "Ana", "João"];
      const encontrou = nomes.includes("Ana");
      alert(encontrou ? "Ana encontrada" : "Ana não está na lista");
    },
  },
  {
    nome: "Ex. 74 - Contar elementos em array",
    func: () => {
      /* erro: subtraía 1 do tamanho do array */
      const arr = ["a", "b", "c", "d"];
      alert(`Total de elementos: ${arr.length}`); 
    },
  },
  {
    nome: "Ex. 75 - Criar objeto pessoa",
    func: () => {
      /* erro: idade estava como texto, não número */
      const pessoa = { nome: "Lucas", idade: "30" };
      alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    },
  },
  {
    nome: "Ex. 76 - Adicionar propriedade em objeto",
    func: () => {
      /* erro: o objeto estava congelado e não aceitava nova propriedade */
      const pessoa = { nome: "Maria" };
      pessoa.idade = 25;
      alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    },
  },
  {
    nome: "Ex. 77 - Somar valores de array",
    func: () => {
      /* erro: reduce sem valor inicial podia dar erro em array vazio */
      const arr = [10, 20, 30];
      const soma = arr.reduce((acc, val) => acc + val); 
      alert(`Soma dos valores: ${soma}`);
    },
  },
  {
    nome: "Ex. 78 - Obter chaves de objeto",
    func: () => {
      /* erro: mostrava valores, mas o exercício pedia chaves */
      const obj = { nome: "Pedro", idade: 40 };
      alert(`Chaves: ${Object.keys(obj).join(", ")}`); 
    },
  },
  {
    nome: "Ex. 79 - Obter valores de objeto",
    func: () => {
      /* erro: mostrava chaves, mas o exercício pedia valores */
      const obj = { nome: "Ana", idade: 22 };
      alert(`Valores: ${Object.values(obj).join(", ")}`); 
    },
  },
  {
    nome: "Ex. 80 - Verificar propriedade no objeto",
    func: () => {
      /* erro: marca estava como null, sem valor real */
      const carro = { modelo: "Fusca", marca: "Volkswagen" }; 
      alert("marca" in carro ? "Tem marca" : "Não tem marca");
    },
  },

  {
    nome: "Ex. 81 - Verificar número primo",
    func: () => {
      /* erro: lógica de primo estava invertida */
      const n = Number(prompt("Digite um número:"));
      let primo = n > 1;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          primo = false;
          break;
        }
      }
      alert(primo ? "É primo" : "Não é primo");
    },
  },
  
  {
    nome: "Ex. 82 - Contar números negativos",
    func: () => {
      /* erro: filtrava positivos em vez de negativos */
      const arr = [1, -2, 3, -4, 5];
      const negativos = arr.filter((n) => n < 0).length;
      alert(`Números negativos: ${negativos}`);
    },
  },
  
  {
    nome: "Ex. 83 - Filtrar números maiores que 10",
    func: () => {
      /* erro: filtrava menores ou iguais a 10 */
      const arr = [1, 15, 3, 20, 7];
      const maioresQue10 = arr.filter((n) => n > 10);
      alert(`Números maiores que 10: ${maioresQue10}`);
    },
  },
  
  {
    nome: "Ex. 84 - Multiplicar todos os números de um array",
    func: () => {
      /* erro: somava em vez de multiplicar */
      const arr = [2, 3, 4];
      const resultado = arr.reduce((acc, curr) => acc * curr);
      alert(`O resultado da multiplicação é ${resultado}`);
    },
  },
  
  {
    nome: "Ex. 85 - Verificar se um número está dentro de um intervalo",
    func: () => {
      /* erro: usava OR, então quase todo número entrava no intervalo */
      const num = Number(prompt("Digite um número:"));
      const intervaloMin = 10;
      const intervaloMax = 20;
      if (num >= intervaloMin && num <= intervaloMax) {
        alert("O número está dentro do intervalo!");
      } else {
        alert("O número está fora do intervalo!");
      }
    },
  },
  
  {
    nome: "Ex. 86 - Contar os elementos de um array",
    func: () => {
      /* erro: somava 1 no tamanho do array */
      const arr = [1, 2, 3, 4, 5];
      alert(`O array tem ${arr.length} elementos`);
    },
  },
  
  {
    nome: "Ex. 87 - Ordenar um array de números",
    func: () => {
      /* erro: sort precisava retornar diferença entre os números */
      const arr = [5, 3, 8, 1];
      arr.sort((a, b) => a - b);
      alert(`Array ordenado: ${arr}`);
    },
  },
  
  {
    nome: "Ex. 88 - Trocar a primeira e a última letra de uma palavra",
    func: () => {
      /* erro: não colocava a última letra no começo */
      const palavra = prompt("Digite uma palavra:");
      
      const novaPalavra =
        palavra.charAt(palavra.length - 1) + palavra.slice(1, -1) + palavra.charAt(0);
      alert(`Nova palavra: ${novaPalavra}`);
    },
  },
  
  {
    nome: "Ex. 89 - Remover espaços de uma string",
    func: () => {
      /* erro: substituía espaço por espaço */
      const texto = prompt("Digite um texto com espaços:");
      const textoSemEspacos = texto.replace(/ /g, "");
      alert(`Texto sem espaços: ${textoSemEspacos}`);
    },
  },
  
  {
    nome: "Ex. 90 - Verificar se uma string contém uma palavra",
    func: () => {
      /* erro: comparava texto minúsculo com palavra maiúscula */
      const texto = prompt("Digite um texto:").toLowerCase();
      const palavra = prompt("Digite uma palavra para verificar:").toLowerCase();
      alert(
        texto.includes(palavra)
          ? "A palavra está no texto"
          : "A palavra não está no texto"
      );
    },
  },
  
  {
    nome: "Ex. 91 - Contar o número de palavras em uma string",
    func: () => {
      /* erro: subtraía 1 da contagem de palavras */
      const texto = prompt("Digite um texto:");
      const numPalavras = texto.trim().split(/\s+/).length;
      alert(`O texto tem ${numPalavras} palavras`);
    },
  },
  
  {
    nome: "Ex. 92 - Inverter um número",
    func: () => {
      /* erro: não invertia o número */
      const num = Number(prompt("Digite um número:"));
      const numInvertido = num.toString().split("").reverse().join("");
      alert(`Número invertido: ${numInvertido}`);
    },
  },
  
  {
    nome: "Ex. 93 - Verificar se um array contém um número",
    func: () => {
      /* erro: comparava texto com número no array */
      const arr = [1, 2, 3, 4, 5];
      const num = Number(prompt("Digite um número:"));
      alert(
        arr.includes(num)
          ? "O número está no array"
          : "O número não está no array"
      );
    },
  },
  
  {
    nome: "Ex. 94 - Trocar todos os 'a' de uma string por 'o'",
    func: () => {
      /* erro: trocava a letra a por ela mesma */
      const texto = prompt("Digite um texto:");
      const novoTexto = texto.replace(/a/g, "o");
      alert(`Novo texto: ${novoTexto}`);
    },
  },
  
  {
    nome: "Ex. 95 - Remover números negativos de um array",
    func: () => {
      /* erro: mantinha negativos em vez de remover */
      const arr = [1, -2, 3, -4, 5];
      const positivos = arr.filter((n) => n >= 0);
      alert(`Array sem negativos: ${positivos}`);
    },
  },
  
  {
    nome: "Ex. 96 - Somar os quadrados de um array",
    func: () => {
      /* erro: somava o número com ele mesmo, não o quadrado */
      const arr = [1, 2, 3, 4];
      const somaQuadrados = arr
        .map((n) => n * n)
        .reduce((acc, curr) => acc + curr, 0);
      alert(`Soma dos quadrados: ${somaQuadrados}`);
    },
  },
  
  {
    nome: "Ex. 97 - Contar o número de letras 'a' em um texto",
    func: () => {
      /* erro: split conta partes, precisava diminuir 1 */
      const texto = prompt("Digite um texto:");
      const numA = texto.split("a").length - 1;
      alert(`Número de 'a': ${numA}`);
    },
  },
  
  {
    nome: "Ex. 98 - Repetir uma palavra X vezes",
    func: () => {
      /* erro: repetia uma vez a menos */
      const palavra = prompt("Digite uma palavra:");
      const vezes = Number(prompt("Quantas vezes deseja repetir a palavra?"));
      alert(palavra.repeat(vezes));
    },
  },
  
  {
    nome: "Ex. 99 - Substituir um número por outro em um array",
    func: () => {
      /* erro: comparava com o número novo em vez do antigo */
      const arr = [1, 2, 3, 4];
      const numeroAntigo = Number(prompt("Digite o número a ser substituído:"));
      const numeroNovo = Number(prompt("Digite o novo número:"));
      const novoArray = arr.map((n) => (n === numeroAntigo ? numeroNovo : n));
      alert(`Novo array: ${novoArray}`);
    },
  },
  
  {
    nome: "Ex. 100 - Encontrar o maior número em um array",
    func: () => {
      /* erro: usava Math.min, mas o exercício pede o maior número */
      const arr = [1, 5, 10, -20, 3];
      alert(`O maior número é ${Math.max(...arr)}`);
    },
  }
];

btns.forEach((btn) => {
  const btnExercicio = document.createElement("button");
  btnExercicio.textContent = btn.nome;
  btnExercicio.addEventListener("click", btn.func);
  divContainer.appendChild(btnExercicio);
});
