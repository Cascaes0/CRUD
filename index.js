var pessoas = []

function adicionarPessoas(pessoa){
    pessoas.push(pessoa);
    console.log(pessoas);
}

function dados (valorBusca){
    pessoas [{ id: 1, nome: 'Beatriz'}, { id: 2, nome: 'Fernanda'}];
    const indicePessoas = pessoas.findIndex((pessoas) => pessoas.id ===valorBusca);
    console.log(pessoas[indicePessoas])
}