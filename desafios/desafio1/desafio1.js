//fa-rotate-180
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

//2 
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
// const idade = usuarios.map(item => item.idade);
// console.log(idade);

// 2.2
const rocketseat = usuarios.filter(item => (item.empresa === 'Rocketseat' && item.idade >= 18));
// console.log(rocketseat);

// 2.3
const buscar = usuarios.find(item => item.empresa === 'Google');
// console.log(buscar);

// 2.4
const operacoes = usuarios.map((item) => ( {name: item.nome, idade: item.idade * 2, empresa:item.empresa} ) ).filter(item => item.idade <= 50 );
// console.log(operacoes);

// 3.1
const arr1 = [1, 2, 3, 4, 5];
arr1.map(item => item + 10);
// console.log(arr.map(item => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
// console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome1 = "Diego";
const idade1 = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade });
// console.log(mostraUsuario(nome1, idade1));
// console.log(mostraUsuario(nome1));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

// 4.1
const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
};

// const { nome, endereco: { cidade, estado } } = empresa;

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// 4.2
const mostraInfo = ( {nome, idade} ) => `${nome} tem ${idade} anos.`;
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x,...y]  = arr;
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, next) => total + next );
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

// 5.2
const usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
};
const usuario2 = {...usuario1, nome: 'Matheus'}
// console.log(usuario2);

const usuario3 = {...usuario1, endereco: {...usuario1.endereco, cidade: 'Lontras' }}
// console.log(usuario3);

// 6
const nome2 = 'Diego';
const idade2 = 23;
// console.log(`O usuário ${nome2} possui ${idade2} anos`);

// 7
const nome = 'Diego';
const idade = 23;
const usuario4 = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
console.log(usuario4);

