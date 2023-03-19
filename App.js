const path = require('path');
const caminho = path.resolve(__dirname, 'text.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const Dados = [
    {nome: 'Tiago'},
    {nome: 'João'},
    {nome: 'Pedro'},
    {nome: 'Mateus'},
    {nome: 'Sérgio'},
    {nome: 'Oliveira'}
];
//Não pode esquecer de converter
const NewDados = JSON.stringify(Dados, '', 2);
escreve(caminho, NewDados);
async function lerArquivo(caminho){
    const dados = await ler(caminho);
    ver(dados);
};
async function ver(dados){
    await console.log(dados);
}
lerArquivo(caminho);