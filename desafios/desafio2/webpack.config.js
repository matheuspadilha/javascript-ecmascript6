module.exports = {
  entry: './main.js', // arquivo principal
  output: { // lugar e arquivo devo enviar o arquivo convertido 
    path: __dirname, // variavel que se refere ao diretorio do webpack `raiz`
    filename: 'bundle.js' // nome arquivo
  },
  module: { // propriedade rules obrigatorio
    rules: [ // informa como o webpack deve se comportar quando o user estiver tentando importar novos arquivos js
      { // configurando apenas o babel
        test: /\/.js$/, // verifica se o arquivo termina com .js
        exclude: /node_modules/, // nao buscar dentro da pasta
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};