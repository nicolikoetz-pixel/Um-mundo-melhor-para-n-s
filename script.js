document.getElementById('receitaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const problema = document.getElementById('problema').value;
    const litros = parseFloat(document.getElementById('litros').value) || 0;

    let nomeReceita = "";
    let listaIngredientes = "";
    let modoPreparo = "";

    // Lógica matemática para as proporções orgânicas
    if (problema === "pulgoes") {
        nomeReceita = "🛡️ Calda de Sabão com Alho (Inseticida Natural)";
        
        // Proporção base: 10g de sabão e 1 dente de alho por litro
        let sabao = 10 * litros; 
        let alho = 1 * litros; 

        listaIngredientes = `
            <li><strong>Sabão neutro em barra:</strong> ${sabao} gramas (ralado)</li>
            <li><strong>Alho:</strong> ${alho} dente(s) (amassados)</li>
            <li><strong>Água:</strong> ${litros} litro(s)</li>
        `;
        modoPreparo = "Ferva uma pequena parte da água para derreter o sabão ralado. Desligue o fogo, misture o alho amassado e deixe curtir (descansar) por 24 horas. Coe bem o líquido e misture com o restante da água fria no pulverizador. Aplique nas folhas no final da tarde.";

    } else if (problema === "lagartas") {
        nomeReceita = "🛡️ Solução de Óleo de Neem (Repelente e Inseticida)";
        
        // Proporção base: 10ml de neem e 5ml de detergente natural por litro
        let neem = 10 * litros;
        let detergente = 5 * litros;

        listaIngredientes = `
            <li><strong>Óleo de Neem (Nim):</strong> ${neem} ml</li>
            <li><strong>Detergente neutro (para ajudar a fixar na folha):</strong> ${detergente} ml</li>
            <li><strong>Água:</strong> ${litros} litro(s)</li>
        `;
        modoPreparo = "Coloque a água no pulverizador, adicione o óleo de Neem e o detergente neutro. Agite bem até formar uma mistura homogênea. Pulverize sobre as plantas atingidas ao final do dia para evitar que a luz forte do sol queime as folhas molhadas com óleo.";

    } else if (problema === "fungos") {
        nomeReceita = "🛡️ Calda de Leite (Fungicida Natural)";
        
        // Proporção base: 10% de leite (100ml) para 90% de água (900ml) por litro final
        let leiteLitros = (litros * 0.1).toFixed(2);
        let aguaLitros = (litros * 0.9).toFixed(2);

        listaIngredientes = `
            <li><strong>Leite cru (direto da vaca, sem ferver):</strong> ${leiteLitros} litro(s)</li>
            <li><strong>Água limpa:</strong> ${aguaLitros} litro(s)</li>
            <li><em>Total da mistura: ${litros} litro(s)</em></li>
        `;
        modoPreparo = "Misture o leite cru na água diretamente dentro do pulverizador e agite levemente. Ao contrário dos inseticidas, esta calda deve ser aplicada <strong>sob a luz do sol</strong> (preferencialmente de manhã), pois os raios UV ativam as proteínas do leite para combater os fungos (como o Oídio).";
    }

    // Atualiza a interface com a receita montada
    document.getElementById('nome-receita').innerText = nomeReceita;
    document.getElementById('lista-ingredientes').innerHTML = listaIngredientes;
    document.getElementById('modo-preparo').innerHTML = modoPreparo;

    // Exibe o resultado com a animação
    document.getElementById('resultado').className = 'resultado-visivel';
});
