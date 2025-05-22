class Atendimento{
    nome;
    cpf;
    data;
    hora;

    constructor(nome, cpf, data, hora){
        this.nome = nome;
        this.cpf = cpf;
        this.data = data;
        this.hora = hora;
    }

    getNome(){
        return this.nome;
    }

    getCpf(){
        return this.cpf;
    }

    getData(){
        return this.data;
    }

    getHora(){
        return this.hora;
    }

    toString(){
        return this.nome + " | " + this.cpf + " | " + this.data + " | " + this.hora;
    }

}