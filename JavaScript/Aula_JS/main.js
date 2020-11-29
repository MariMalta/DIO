var validar = 0;

function soma (n1, n2){
    return n1 + n2;
}

function replace(frase,nome, novo_nome){
    return frase.replace(nome,novo_nome);
}

function FizzBuzz(n) {
    if( typeof n !== 'number'){
        return 'Nao e um numero'
    }
    else if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (n % 5 === 0){
        return 'Buzz';
    }
    else if (n % 3 === 0){
        return 'Fizz';
    }
    else{
        return n;
    }
}

function valida_idade(idade){
   
    if (idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

function load(){
    alert("Pagina Carregada");
}
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}
function redirecionar(){
    window.open("https://www.avanade.com/pt-br");
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}
function funcao_change(elemento){
    console.log(elemento.value);
}

soma(2,5)
console.log(soma);
alert(replace("Vai Japão","Japão","Brasil"));
var idade = prompt("Qual sua idade?");
valida_idade(idade);
console.log(validar);
const resultado = FizzBuzz(15)
console.log(resultado);
