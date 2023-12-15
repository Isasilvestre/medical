function carregarTabela() {

    var nomeMedico = localStorage.getItem("variavel");
    console.log("nome", nomeMedico);
    

    fetch("../consultas.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            data.forEach(consultas => {
                if (consultas.medico === nomeMedico) {
                    const tr = document.createElement('tr');
                    
                    const tdPaciente = document.createElement('td');
                    const tdDia = document.createElement('td');
                    const tdHora = document.createElement('td');
                    const tdMedico = document.createElement('td');

                    tdPaciente.textContent = consultas.paciente;
                    tdDia.textContent = consultas.dia;
                    tdHora.textContent = consultas.hora;
                    tdMedico.textContent = consultas.medico;

                    tr.appendChild(tdPaciente);
                    tr.appendChild(tdDia);
                    tr.appendChild(tdHora);
                    tr.appendChild(tdMedico);
                    

                    corpoTabela.appendChild(tr);
                }
            });
        });
}