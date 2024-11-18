const faxina = (nome, sobreNome, idade) => {
    if (nome === null){
        delete nome;
    }

    else if (sobreNome === null){
        delete sobreNome;
    }

    else if (idade === null){
        delete idade;
    }

    else {
        console.log(`nome:${nome} ${sobreNome}, idade:${idade} anos`);
    }
};

faxina(`Gustavo`, `dos Reis de Carvalho`, `18`)