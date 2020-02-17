class List {
  constructor() {
    this.data = [];
  }
  
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor () {
    super();

    this.usuario = 'Matheus';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item * 2;
 });

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
 });
 
console.log(sum); 

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
  return item === 4;
 });
 
 console.log(find);

const newArr1 = arr.map( item => item * 2);

console.log(newArr1);

const test = () => ({nome: "Mathues"});

console.log(test());

// function soma(a = 3, b = 6) {
//   return a + b;
// }
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

const user = {
  nome: 'Matheus',
  idade: 25,
  endereco: {
    cidade: 'Novo Hamburgo',
    estado: 'RS'
  }
}

const { nome, idade, endereco: { cidade } } = user;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}) { 
  console.log(nome, idade);
}
 
mostraNome(user);

const user1 = {
  nome: 'Matheus',
  idade: 25,
  empresa: 'Meta'
} 
 
const { nome, ...resto} = user1;

console.log(nome);
console.log(resto);

const arr2 = [1, 2, 3, 4];
const [a, b, ...c] = arr2;

console.log(a);
console.log(b);
console.log(c);

function soma2(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma2(1, 3, 4));
 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user1 = {
  nome: 'Matheus',
  idade: 25,
  empresa: 'Meta'
}
 
const user2 = { ...user1, nome: 'Ben-hur'}

console.log(user2);

const nome = 'Matheus';
const idade = 25;

console.log(`Meu nome e ${nome}`);

const user = { 
  nome,
  idade,
  empresa: 'Meta'
}
 