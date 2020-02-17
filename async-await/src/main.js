// const minhaPromise = () => new Promise((resolve, reject) => {
//   setTimeout(() => { resolve('ok') }, 2000);
// });

// es8 +

// async function executaPromise() {
// // sempre que tiver um await na frente da promisse a proxima linha so ira executar apos o retorno da primeira chamada;
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
// }

// arrow function
// const executaPromise = async () => {
//   // sempre que tiver um await na frente da promisse a proxima linha so ira executar apos o retorno da primeira chamada;
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
// }

// executaPromise();

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch (err) {
      console.warn('Erro na API');
    }
  }
}

Api.getUserInfo('matheuspadilha');