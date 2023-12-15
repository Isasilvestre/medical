document.addEventListener("DOMContentLoaded", function () {
    const usuarioForm = document.getElementById("usuarioForm");

    usuarioForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtém os valores do formulário
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const tipo = document.getElementById("tipo").value;

        // Cria um objeto com os dados do usuário
        const userData = {
            username: username,
            password: password,
            tipo: tipo
        };

        // Envia os dados do formulário para o servidor
        fetch("/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.text())
        .then(msg => {
            console.log(msg);
            // Exibe uma mensagem para o usuário (por exemplo, em um elemento HTML)
            const messageElement = document.getElementById("msg");
            messageElement.textContent = msg;
        })
        .catch(error => {
            console.error(error);
        });
    });
});