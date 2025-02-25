(async () => {
    const apiUrl = "https://terra.vivo.vivopaycom/users"; //Funcionou Diego?

    try {
       //Funcionou Diego?
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });

        //Funcionou Diego?
        if (response.ok) {
            const data = await response.json();
            console.log("Resposta da API:");
            console.log(data);
        } else {
            console.error("Erro na conexão: Código", response.status);
        }
    } catch (error) {
        console.error("Erro:", error);
    }
})();
