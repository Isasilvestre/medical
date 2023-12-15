const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar o diretório onde seus arquivos estáticos estão localizados
app.use(express.static(path.join(__dirname)));

// Função para manipulação de erros
function handleFileError(err, res) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
}

// Rota para processar o envio do formulário de cadastro
app.post("/cadastro", (req, res) => {
    const { username, password, tipo } = req.body;

    fs.readFile("users.json", "utf8", (err, data) => {
        if (err) {
            handleFileError(err, res);
            return;
        }

        const usersArray = JSON.parse(data);
        usersArray.push({ username, password, tipo });

        const usersJSON = JSON.stringify(usersArray, null, 2);

        fs.writeFile("users.json", usersJSON, (err) => {
            if (err) {
                handleFileError(err, res);
                return;
            }

            res.status(200).send("Usuário cadastrado com sucesso!");
        });
    });
});

// Rota para processar o envio do formulário de consultas
app.post("/consulta", (req, res) => {
    const { paciente, dia, hora, medico } = req.body;

    fs.readFile("consultas.json", "utf8", (err, data) => {
        if (err) {
            handleFileError(err, res);
            return;
        }

        const consultasArray = JSON.parse(data);
        consultasArray.push({ paciente, dia, hora, medico });

        const consultasJSON = JSON.stringify(consultasArray, null, 2);

        fs.writeFile("consultas.json", consultasJSON, (err) => {
            if (err) {
                handleFileError(err, res);
                return;
            }

            res.status(200).send("Consulta agendada com sucesso!");
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});

