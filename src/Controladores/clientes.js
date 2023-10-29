const {contas} = require('../bancodedados');
let {numeroDeConta} = require('../bancodedados');

const listarContas = (req, res) => {
    return res.status(200).json(contas);
}

const cadastrarConta = (req, res) => {
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body; 

    if (!nome){
        return res.status(400).json({ mensagem: 'O nome é obrigatorio.'})
    }

    if (!cpf) {
        return res.status(400).json({ mensagem: 'O cpf é obrigatorio.' })
    }

    if (!data_nascimento) {
        return res.status(400).json({ mensagem: 'A data de nascimento é obrigatoria.' })
    }

    if (!telefone) {
        return res.status(400).json({ mensagem: 'O telefone é obrigatorio.' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O e-mail é obrigatorio.' })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha é obrigatoria.' })
    }


const conta = {
    numero: numeroDeConta++,
    nome,
    cpf,
    data_nascimento,
    telefone,
    email,
    senha

}

    contas.push(conta);

    return res.status(201).json(conta);
}   

const atualizarConta = (req, res) => {

    const {numero} = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body; 

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatorio.' })
    }

    if (!cpf) {
        return res.status(400).json({ mensagem: 'O cpf é obrigatorio.' })
    }

    if (!data_nascimento) {
        return res.status(400).json({ mensagem: 'A data de nascimento é obrigatoria.' })
    }

    if (!telefone) {
        return res.status(400).json({ mensagem: 'O telefone é obrigatorio.' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O e-mail é obrigatorio.' })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha é obrigatoria.' })
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero);

    })

        if (!conta) {

            return res.status(404).json({ mensagem: 'Conta não encontrada.'})
        }

        conta.nome = nome;
        conta.cpf = cpf;
        conta.data_nascimento = data_nascimento;
        conta.telefone = telefone;
        conta.email = email;
        conta.senha = senha

        return res.status(204).send();
}

const atualizarDadosConta = (req, res) => {
    const { numero } = req.params;
    

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero);

    })

    if (!conta) {

        return res.status(404).json({ mensagem: 'Conta não encontrada.' })
    }

    conta.nome = nome;
    
    return res.status(204).send();
}



module.exports ={
    listarContas,
    cadastrarConta,
    atualizarConta,
    atualizarDadosConta

}