//No.js

class No{
    #dado;
    #proximo;
    constructor(novoDado){
        this.#dado = novoDado;
        this.#proximo = null;
    }

    get proximo(){
        return this.#proximo;
    }
    get dado(){
        return this.#dado;
    }

    set dado(novoDado){
        this.#dado = novoDado;
    }
    set proximo(proximo){
        this.#proximo = proximo;
    }

    toString{
        return this.#dado.toString();
    }
}