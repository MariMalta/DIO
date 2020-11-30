//currying - transforma uma função q espera varios argumentos, em uma função que espera apenas um.
function soma(a, b) {
    return a + b;
}

soma(2, 3);
soma(2, 4);
soma(2, 5);

function soma(a) {
    return function (b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

//hoisting - as declarações são movidas para o topo da função. 
//var - nao entende escopo de bloco, apenas escopo de função ou escopo global.
//const e let - respeitam escopo de bloco. 

// de variavel 
function fn () {
    console.log(text); // undefined, pois a variavel existe, mas ainda nao foi declarada. 
    const text = 'Exemplo';
    console.log(text);// exemplo, pois ja foi declarada
}

//de função
function fn () {

    log('Hosting de Funcao'); // vai ser levantada a função toda,logo essa função vai funcionar normalmente.

    function log(value){
        console.log(value);
    }
}

//imutabilidade - variaveis nunca vao mudar, se precisar alterar, vai criar uma nova.
//um objeto nunca é atualizado, ele é copiado e altera só oq você precisa.

const nome = {
    nome: 'Mariana',
    sobrenome: 'Malta'
};

function GetFullName(user){
    return{
        ...user,
        FullName: `${user.nome}  ${user.sobrenome}`
    }
}

const FullName = GetFullName(user);
console.log(FullName);

