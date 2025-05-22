function atualizarUltimoAtendimento() {
    const ultimo = localStorage.getItem('ultimoAtendido');
    
    if(ultimo !== null && ultimo !== undefined) {
        document.getElementById('ultimoAtendimento').innerText = ultimo;
    } 
    else{
        document.getElementById('ultimoAtendimento').innerText = 'Aguardando...';
    }      
}

atualizarUltimoAtendimento();


setInterval(atualizarUltimoAtendimento, 1000);
