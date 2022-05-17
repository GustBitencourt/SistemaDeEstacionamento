(function () {
    /* atalho pra usar query selector */
    /* HTMLInputElement entende que todas as informações/eventos serão de input */
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    $('#cadastrar')?.addEventListener("click", () => {
        const nome = $('#nome')?.value;
        const placa = $('#placa')?.value;

        if (nome || placa) {
            alert('Nome e laca do veiculo obrigatórios');
            return;
        }
    })

})();