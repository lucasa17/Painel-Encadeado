const minhaFila = new FilaCircular(5);

function addElemento(){

    if(!minhaFila.isFull()){
      const nome = document.getElementById("txtnovoNome");
      const cpf = document.getElementById("txtnovoCPF");
      const data = obterDataAtual();
      const hora = obterHoraAtual();
   
      //console.log(nome.value);
      const novoAtendimento = new Atendimento(nome.value, cpf.value, data, hora); 
       // setar valor do objeto atendimento e inserir na fila

       minhaFila.enqueue(novoAtendimento);
       mostrarFila();
       nome.value = ""; // limpa
       cpf.value = ""; // limpa
       nome.focus(); // cursor no input
    } 
    else
        alert("Fila cheia!");     
}// fim addElemento
//-----------------------------------
function mostrarFila(){
   const listaFila = document.getElementById("listFila");
   //listaFila.textContent = minhaFila.toString();
   listaFila.innerHTML = ""; // limpa a lista
   for(let item of minhaFila){

      const listaElemento = document.createElement("li");
      listaElemento.textContent = item;
      listaFila.appendChild(listaElemento);
   }
}

//-----------------------------
function atenderFila(){

   if(!minhaFila.isEmpty()){
      const atendido = minhaFila.dequeue();
      alert("Pessoa atendida");
      mostrarFila();
     
      //salvar no banco texto do navegador
      console.log(atendido.hora);
      const horaAtual = obterHoraAtual();
      document.getElementById("Atendido").innerHTML = 'O paciente '+atendido.nome+' foi atendido às '+horaAtual+', chegou às '+ atendido.hora +'. Tempo de espera: '+calcularDiferencaHoras(atendido.hora, horaAtual);

      localStorage.setItem('ultimoAtendido', atendido.nome);
   }
   else
      alert("Fila vazia!");
}

function buscarCpf() {
   const cpf = document.getElementById("txtnovoCPF").value;
   let cont = 0;
console.log("aaaaaa");
   for (let item of minhaFila) {
      cont++;
      if (item.cpf === cpf) {
         const horaAtual = obterHoraAtual();
         msg =  "Pessoa encontrada: " + item.nome + "\nPosição na Fila: " + cont + "\nTempo esperando: " +calcularDiferencaHoras(item.hora, horaAtual);
         alert(msg);

         return item;
      }
   }

   alert("CPF não encontrado na fila!");
   return null; 
}