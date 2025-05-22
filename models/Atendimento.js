class Atendimento{
    nome;
    cpf;
    dataNasc;
    data;
    hora;

    constructor(nome, cpf, dataNasc, data, hora){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.data = data;
        this.hora = hora;
    }

    getNome(){
        return this.nome;
    }

    getCpf(){
        return this.cpf;
    }
    
    getDataNasc(){
        return this.dataNasc;
    }
    
    getData(){
        return this.data;
    }

    getHora(){
        return this.hora;
    }

    toString(){
        return "Nome: " + this.nome + " | CPF: " + this.cpf + " | Data de nascimento:" + this.dataNasc + " | Data:" + this.data + " | Hora: " + this.hora;
    }

}