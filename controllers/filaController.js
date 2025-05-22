const filaGeral = new FilaEncadeada(5);
const filaPrioritaria = new FilaEncadeada(5);

function addElemento(){

      const nome = document.getElementById("txtnovoNome");
      const cpf = document.getElementById("txtnovoCPF");
      const dataNasc = document.getElementById("txtnovaDataNasc");
      const data = obterDataAtual();
      const hora = obterHoraAtual();
   
      const novoAtendimento = new Atendimento(nome.value, cpf.value, dataNasc.value, data, hora); 

console.log(calcularIdade(dataNasc.value));

      if(calcularIdade(dataNasc.value) >= 60){
         filaPrioritaria.enqueue(novoAtendimento);
         mostrarFilaPrioritaria();
         nome.value = ""; 
         cpf.value = ""; 
         dataNasc.value = "";
         nome.focus();
      }
      else{
         filaGeral.enqueue(novoAtendimento);
         mostrarFilaGeral();
         nome.value = ""; 
         cpf.value = ""; 
         dataNasc.value = "";
         nome.focus();
      }      
}

function mostrarFilaGeral() {
   const listaPessoasFila = document.getElementById("listFila");

   listaPessoasFila.innerText = "";
   for (const atendimento of filaGeral){
         const li = document.createElement("li");
         li.innerText = atendimento.toString();
         listaPessoasFila.appendChild(li);
   }
 }

 function mostrarFilaPrioritaria() {
   const listaPessoasFila = document.getElementById("listFilaP");
   listaPessoasFila.innerText = "";
   for (const atendimento of filaPrioritaria){
         const li = document.createElement("li");
         li.innerText = atendimento.toString();
         listaPessoasFila.appendChild(li);
   }
 }

 let cont = 0;
 function atenderFila(){
   if(filaPrioritaria.isEmpty() && !filaGeral.isEmpty()){      
      const atendido = filaGeral.dequeue();
      alert("Pessoa atendida");
      mostrarFilaGeral();
     
      //salvar no banco texto do navegador
      console.log(atendido.hora);
      const horaAtual = obterHoraAtual();
      document.getElementById("Atendido").innerHTML = 'O paciente '+atendido.nome+' foi atendido às '+horaAtual+', chegou às '+ atendido.hora +'. Tempo de espera: '+calcularDiferencaHoras(atendido.hora, horaAtual);

      localStorage.setItem('ultimoAtendido', atendido.nome);
   }
   else if(!filaPrioritaria.isEmpty() && cont < 3){
      const atendido = filaPrioritaria.dequeue();
      alert("Pessoa atendida");
      mostrarFilaPrioritaria();
     
      //salvar no banco texto do navegador
      console.log(atendido.hora);
      const horaAtual = obterHoraAtual();
      document.getElementById("Atendido").innerHTML = 'O paciente '+atendido.nome+' foi atendido às '+horaAtual+', chegou às '+ atendido.hora +'. Tempo de espera: '+calcularDiferencaHoras(atendido.hora, horaAtual);
      localStorage.setItem('ultimoAtendido', atendido.nome);

      cont++;
      console.log(cont);
   }
   else if(!filaGeral.isEmpty() && cont == 3){
      cont = 0;
      console.log(cont);

      const atendido = filaGeral.dequeue();
      alert("Pessoa atendida");
      mostrarFilaGeral();

      //salvar no banco texto do navegador
      console.log(atendido.hora);
      const horaAtual = obterHoraAtual();
      document.getElementById("Atendido").innerHTML = 'O paciente '+atendido.nome+' foi atendido às '+horaAtual+', chegou às '+ atendido.hora +'. Tempo de espera: '+calcularDiferencaHoras(atendido.hora, horaAtual);
      localStorage.setItem('ultimoAtendido', atendido.nome);
   }
   else{
      alert("Fila vazia!");
   }
}

function buscarCpf() {
   const cpf = document.getElementById("txtnovoCPF").value;
   let contG = 0;
   let contP = 0;
   for (let item of filaGeral) {
      contG++;
      if (item.cpf === cpf) {
         const horaAtual = obterHoraAtual();
         msg =  "Pessoa encontrada: " + item.nome + "\nPosição na Fila Geral: " + contG + "\nTempo esperando: " +calcularDiferencaHoras(item.hora, horaAtual);
         alert(msg);

         return item;
      }
   }
   for (let item of filaPrioritaria) {
      contP++;
      if (item.cpf === cpf) {
         const horaAtual = obterHoraAtual();
         msg =  "Pessoa encontrada: " + item.nome + "\nPosição na Fila Prioritária: " + contP + "\nTempo esperando: " +calcularDiferencaHoras(item.hora, horaAtual);
         alert(msg);

         return item;
      }
   }

   alert("CPF não encontrado na fila!");
   return null; 
}

function calcularIdade(dataNascimento) {
   // Espera data no formato "dd/mm/aaaa"
   const [ano, mes, dia] = dataNascimento.split('-').map(Number);
 
   const hoje = new Date();
   const dataNasc = new Date(ano, mes - 1, dia); // Mês começa em 0 no JavaScript
 
   let idade = hoje.getFullYear() - dataNasc.getFullYear();
   const mesAtual = hoje.getMonth();
   const diaAtual = hoje.getDate();
 
   // Verifica se a pessoa ainda não fez aniversário neste ano
   if (mesAtual < mes - 1 || (mesAtual === mes - 1 && diaAtual < dia)) {
     idade--;
   }
 
   return idade;
 }