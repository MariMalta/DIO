function fn (){
    return 'Codigo aqui';
}

const arrowFn = () => 'Codigo aqui'; // Arrow Function tem return explicito.

const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Codigo aqui';
}

//Functions e Arrays tbm sao objetos, entao é possivel criar atributos dentro da funcao
fn.prop = 'Posso criar propriedades'

console.log(fn());
console.log(fn.prop);

//Receber Parametros

const longValue = value => console.log(value);
const longFnResult = FuncParam => console.log(FuncParam());

longFnResult(fn);

//Receber e retornar Funções
//Currying

const controlFnExec = FuncParam => allowed =>{
    if (allowed){
        FuncParam();
    }
}

const handleFnExec = controlFnExec(fn);
handleFnExec(true);//executa a funcao fn
handleFnExec();// nao executa a funcao fn





