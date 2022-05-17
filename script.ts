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
        function read(): Veiculo[] {
            //verificando se há informações no local storage
            return localStorage.patio? JSON.parse(localStorage.patio) : [];
        }

        //save espera um array de veiculo "lista"
        function save(veiculo: Veiculo[]){
            //salvando no local storage
            localStorage.setItem('patio', JSON.stringify(veiculo));
        }

        function add(veiculo: Veiculo, salvar?: boolean) {
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

            //salvando no local storage - lendo todas as informações do local storage para salvar
            if (salvar) save([...read(), veiculo])
        }

        function remove(){}


        function render(){
            $('#patio')!.innerHTML = '';

            const patio = read();

            //se existe veiculos no local store ele adiciona na tabela
            if(patio.length) {
                patio.forEach((veiculo) => add(veiculo))
            }
        }

        return { read, add, remove, save, render };
    }

    //chamando função de render
    patioHandle().render()

    $('#cadastrar')?.addEventListener("click", () => {
        const nome = $('#nome')?.value;
        const placa = $('#placa')?.value;

        if (!nome || !placa) {
            alert('Nome e placa do veiculo obrigatórios');
            return;
        }

        patioHandle().add({ nome, placa, entrada: new Date() }, true);
    })

})();