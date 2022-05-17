"use strict";
(function () {
    var _a;
    /* atalho pra usar query selector */
    /* HTMLInputElement entende que todas as informações/eventos serão de input */
    const $ = (query) => document.querySelector(query);
    function patioHandle() {
        function read() {
            //verificando se há informações no local storage
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        //save espera um array de veiculo "lista"
        function save(veiculo) {
            //salvando no local storage
            localStorage.setItem('patio', JSON.stringify(veiculo));
        }
        function add(veiculo) {
            var _a;
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
            (_a = $('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
            //salvando no local storage - lendo todas as informações do local storage para salvar
            save([...read(), veiculo]);
        }
        function remove() { }
        function render() { }
        return { read, add, remove, save, render };
    }
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert('Nome e placa do veiculo obrigatórios');
            return;
        }
        patioHandle().add({ nome, placa, entrada: new Date() });
    });
})();
