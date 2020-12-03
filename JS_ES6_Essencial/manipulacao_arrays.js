//criar array
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

Array.of(1, 2, 3);
const persons = Array.of('Joao', 'Maria', 'Pedro');
const numbersAndStrings = Array.of('Maria', 2, 'Joao', 4);

const arr3 = Array(3); // cria array com 3 posições vazias
const arr4 = Array(2, 4, 6, 'Joao');

//inserir e remover elementos
const frutas = ['melao', 'banana'];
frutas.push('morango');  //adiciona no final e retorna tamanho do array
console.log(frutas);
frutas.pop(); //remove no final e retorna o elemento removido
frutas.unshift('abacate'); // adiciona no inicio e retorna tamanho do array
console.log(frutas);
frutas.shift(); // remover no inicio e retorna o elemento retirado.
console.log(frutas);

const salgados = ['coxinha', 'empada', 'bolinha de queijo'];
const alimentos = frutas.concat(salgados); // concatenar 2 arrays.
console.log(alimentos);

const numbers = [1, 2, 3, 4, 5];
numbers.slice(0, 2); // 1 e 2
numbers.slice(2) // 3 4 5
numbers.slice(-3) // 3 4 5
numbers.splice(2) // vai remover apartir de 2  [1, 2]
numbers.splice(0, 0, 'first'); // [first, 1, 2]
numbers.splice(1, 0, 2) // apartir da posição 1, remover 0, e adicionar 2.
console.log(numbers);

//iterar elementos

const arr5 = [1, 2, 3, 4, 5];
arr5.forEach((value, index, arr) => console.log(value, index, arr));// apenas itera

arr5.map(value => value * 2);  // retorna um novo array

const arr6= [ 1, 2, 3, 4, [5, 6, 7, [8 , 9]]]; 
const a = arr6.flat(); // retorna com 1 grau de profundidade
const b = arr6.flat(2) // 2 graus de profundidade
console.log(a);
console.log(b);
 
const arrInterator = arr5.keys(); // retorna um array interator que contem chaves para cada elemento do array
const arrInterator2 = arr5.values(); // retorna um arry interator q tem os valores
const arrInterator3 = arr5.entries(); // retorna array interator cm valores e chaves
console.log(arrInterator.next());
console.log(arrInterator2.next());
console.log(arrInterator3.next());

//buscar elementos

const maiorQueDois = arr5.find(value => value > 2); // primiro elemento
const indexMaiorQueX = arr5.find(index => index > 3); //primeiro elemento
const todosElementos = arr5.filter(value => value > 2); // todos elementos > 2
const firstIndexof = arr5.indexOf(value => value > 2) //primeiro index
const lastIndexof = arr5.lastIndexOf(value => value > 1); // ultimo index
const hasItem = arr5.includes(2); // retorna true or false
const hasSomeItem = arr5.some(value => value % 2 === 0); // tem algm valor par? retorna booleano t or f
const hasEveryItem = arr.every(value => value > 3); // se todos os valores sao maior q 3
const reverse = arr5.reverse(); //inverte a ordem o array 

//transoformar em outro tipo de dado

const arrayToString = arr5.join('-'); //transforma o array em uma string serparando com o delimitador passado
const reduce = arr5.reduce(value => value += 2); //  pode retornar um novo tipo de dado, ou um array

