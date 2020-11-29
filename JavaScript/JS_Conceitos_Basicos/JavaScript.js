//factory functions
function CriarCelular(Marca,Tela,Bateria,Memoria){
    return{
        Marca,
        Tela,
        Bateria,
        Memoria,
    }
}

//constructor function 
function Celular(MarcaCelular,TamanhoTela,Bateria,Memoria){
    this.MarcaCelular = MarcaCelular;
    this.TamanhoTela = TamanhoTela;
    this.Bateria = Bateria;
    this.Memoria = Memoria;
    this.ligar = function (){

        console.log('Ligando para o celular...');
    }
}

const celular1 = CriarCelular('motorola',5.5,5000,32);
console.log(celular1);

const celular2 = new Celular ('asus',5.5,500,64);
console.log(celular2);

//Dinamic Obejects and cloning obejects

const mouse = {
    cor: 'azul',
    marca: 'logitech',
    modelo: 'M170'
}

mouse.velocidade = 5000;
mouse.mudarDPI = function(){
    console.log('mudando a DPI');
}

console.log(mouse);
delete mouse.cor;
console.log(mouse);

const Mouse2 = {...mouse};
console.log(Mouse2);




