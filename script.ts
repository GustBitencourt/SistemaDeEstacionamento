interface Veiculo {
    nome?: String;
    placa?: String;
    entrada?: Date;
}

(function () {
    /* atalho pra usar query selector */
    /* HTMLInputElement entende que todas as informações/eventos serão de input */
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function patioHandle() {
        function read(){}

        function add(veiculo: Veiculo) {
            const row = document.createElement("tr");

            //criando tabela
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
            `;

            //inserindo elemento no HTML
            $('#patio')?.appendChild(row);
        }

        function remove(){}

        function save(){}

        function render(){}

        return { read, add, remove, save, render };
    }

    $('#cadastrar')?.addEventListener("click", () => {
        const nome = $('#nome')?.value;
        const placa = $('#placa')?.value;

        if (!nome || !placa) {
            alert('Nome e placa do veiculo obrigatórios');
            return;
        }

        patioHandle().add({ nome, placa, entrada: new Date() });
    })

})();