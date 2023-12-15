function relatorio() {

    var nomePaciente = localStorage.getItem("variavel");
    console.log (nomePaciente);


    fetch ("../consultas.json")
    .then((response) => response.json())
    .then((data)=> {
        console.log(data);

        data.forEach ((consulta) => {
            if (consulta.paciente === nomePaciente) {
                    const tr = document.createElement('tr');
                    const tdPaciente = document.createElement('td');
                    const tdDia = document.createElement('td');
                    const tdHora = document.createElement('td');
                    const tdMedico = document.createElement('td');

                    tdPaciente.textContent = consulta.paciente;
                    tdDia.textContent = consulta.dia;
                    tdHora.textContent = consulta.hora;
                    tdMedico.textContent = consulta.medico;

                    tr.appendChild(tdPaciente);
                    tr.appendChild(tdDia);
                    tr.appendChild(tdHora);
                    tr.appendChild(tdMedico);

                    corpoTabela.appendChild(tr);
            }
        });
    });
}
