//FilaEncadeada.js

class FilaEncadeada{
    #inicio;
    #fim;
    #qtd;

    constructor(){
        this.#inicio = null;
        this.#fim = null;
        this.#qtd = 0;
    }

    isEmpty(){
        return this.#inicio == null;
    }

    enqueue(dado){
        const novoNo = new No(dado);
        if(!this.isEmpty()){
            this.#fim.proximo = novoNo; 
        }
        else{
            this.#inicio = novoNo;
        }
        this.#fim = novoNo;
        this.#qtd++;
    }

    dequeue(){
        if(!this.isEmpty){
            const dado = this.#inicio.dado;
            this.#inicio = this.#inicio.proximo;
            if(this.#inicio == null){
                this.#fim = null;
            }
            this.#qtd--;
        return dado;
        }
    return null;
    }
}