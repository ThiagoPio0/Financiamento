const calcular = document.getElementById('calcular');


function pace () {
    const nome = document.getElementById('nome').value;
    const RendaMensal = document.getElementById('RendaMensal').value;
    const Financiamento = document.getElementById('Financiamento').value;
    const Parcelas = document.getElementById('Parcelas').value;
    const jurosBanco = document.getElementById('jurosBanco').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && RendaMensal !== '' && Financiamento !== '' && Parcelas !== '') {

        const divisaoJuros = (jurosBanco/ 100);
        const PMT = Financiamento*(1+ divisaoJuros) ** Parcelas * (divisaoJuros) / ((1 + divisaoJuros) ** Parcelas - 1);
        var CalculoPorcentagemRenda = (RendaMensal * 0.3);
        var PMTparaCalculo = PMT.toFixed();

        if(CalculoPorcentagemRenda < PMTparaCalculo){ 
        resultado.textContent = `Financiamento Negado!`;
        }
        else{
        const PMTFormatado = PMT.toFixed(2);
        resultado.textContent = `Olá ${nome}! Financiando R$
         ${Financiamento} em ${Parcelas} vezes, com o juros de ${jurosBanco}%, você irá pagar R$ ${PMTFormatado} por mês. `;
        }
    }
    else
    {
        resultado.textContent = `Para calcular o resultado, preencha todos os campos em branco!`;

    }

}

calcular.addEventListener('click', pace);
       
        
        

        
        