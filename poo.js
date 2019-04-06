//definindo classe
function Pessoa(nome){
    this.Nome = nome;//this deixa a variavel Nome como publica, se quiser privada só colocar var
}
//Objetos:
var pessoa1 = new Pessoa("Michel");
var pessoa2 = new Pessoa("Daniel");
console.log("Nome pessoa 1"+pessoa1.Nome+" Nome Pessoa 2"+pessoa2.Nome);

//-----------------------------------------------------------------
// Classses em JavaScript usando objetos literais.
// da forma abaixo já é a definição do objeto
var carro = {
    marca:undefined,
    modelo:undefined,
    getDetalhes: function(){
        return this.marca +" "+ this.modelo;
    }
}
carro.marca="BMW";
carro.modelo="X6";
console.log(carro.getDetalhes());

//-----------------------------------------------------------------
function Automovel(){
    //atributos privados
    var Marca = "sem marca";
    var Modelo = "sem modelo";

    //atributos publicos
    this.SetMarca = SetMarca;
    this.SetModelo = SetModelo;
    this.ShowMarca = DisplayMarca;
    this.ShowModelo = DisplayModelo;

    //metodos
    function DisplayMarca(){
        return "marca é "+Marca;
    }
    function DisplayModelo(){
        return "marca é "+Modelo;
    }
    function SetMarca(_marca){
        Marca = _marca;
    }
    function SetModelo(_modelo){
        Modelo = _modelo;
    }
}

//metodo criado fora da classe e chamando o metodo que seria como o get
Automovel.prototype.ligar = function(){
    console.log("FRUMMMMMMMMMMMMMMMM"+this.ShowModelo());
}

var automovel1 = new Automovel();
automovel1.SetMarca("Fiat");
automovel1.SetModelo("Unomile");
console.log(" Automóvel: "+automovel1.ShowMarca()+" "+automovel1.ShowModelo());
automovel1.ligar();

//-----------------------------------------------------------------
var SerHumano = function(){
        console.log("Objeto criado");
}
var p1 = new SerHumano();
//-----------------------------------------------------------------


//Herança
//Classe Pai
function Humano(){};

Humano.prototype.caminhar = function(){
    console.log("Estou caminhando");
}

Humano.prototype.dizOi = function(){
    console.log("Olá Humano");
}

//Definir classe filha
function Estudante(){
    //chama o metodo pai
    Humano.call();
};

//Herda de Pessoa (Aqui faz a magia)
Estudante.prototype = new Humano();

//Corrige o ponteiro construtor, que aponta para Pessoa();
Estudante.prototype.constructor = Estudante;

//Adicionando metodo dizOI
Estudante.prototype.dizOi = function(){
    console.log("Olá Estudante");
}

Estudante.prototype.dizTchau = function(){
    console.log("Tchau Estudante");
}


//objetos
var estudante_1 = new Estudante()
estudante_1.dizOi();
estudante_1.dizTchau();
estudante_1.caminhar();

console.log(estudante_1 instanceof Estudante);
console.log(estudante_1 instanceof Humano);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//herança

//classePai 
var pai = {
    valor:100,
    getValor: function(){
        return this.valor;
    }
};

//classe filho 1
var filho1 = Object.create(pai);
filho1.valor =200;
//classe neto
var neto = Object.create(filho1);
neto.valor = 300;

//Polimorfismo
filho1.getValor = function getValorFilho(){
    return this.valor +309;
};



console.log("HERANÇA DAS CLASSES");
console.log("Pai "+ pai.getValor());
console.log("Filho "+ filho1.getValor());
console.log("Neto "+neto.getValor())




































































