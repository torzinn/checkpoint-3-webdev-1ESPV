let anotacoes = JSON.parse(localStorage.getItem("anotacoes")) || [];

function adicionar() {
    const lista = document.getElementById("anotacoes");
    lista.innerHTML = "";

    anotacoes.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = item.texto + " — " + item.data + 
            ' <button onclick="excluir(' + index + ')">Excluir</button>';
        lista.appendChild(li);
    });
}

document.getElementById("add").onclick = () => {
    const input = document.getElementById("anotacao");
    const texto = input.value;

    if (texto === "") return;

    const data = new Date().toLocaleString("pt-BR");

    anotacoes.unshift({ texto, data });
    localStorage.setItem("anotacoes", JSON.stringify(anotacoes));

    input.value = "";
    adicionar();
};

function excluir(index) {
    anotacoes.splice(index, 1);
    localStorage.setItem("anotacoes", JSON.stringify(anotacoes));
    adicionar();
}

document.getElementById("rmv").onclick = () => {
    if (confirm("Apagar tudo?")) {
        anotacoes = [];
        localStorage.removeItem("anotacoes");
        adicionar();
    }
};

adicionar();