let ctx = document.getElementById("genero").getContext("2d");

const info = [
    gen = {
        id: "genero",
        labels: ['Masculino', 'Feminino', 'Não-Binário', 'Prefiro não informar', 'Outro'],
        data: [20,20,20,20,20],
        title: 'Gênero',
    },
    idad = {
        id: "idade",
        labels: ['Abaixo de 18', '18 a 25', '26 a 59', 'Acima de 60'],
        data: [20,20, 20, 20],
        title: 'Faixa Etária',
    },
    rac = {
        id: "raca",
        labels: ['Preto', 'Preto', 'Indígena', 'Amarelo', 'Pardo', 'Outro'],
        data: [20,20,20,20,20,0],
        title: 'Cor/Raça',
    },
    zon = {
        id: "zona",
        labels: ['Zona Urbana', 'Zona Rural'],
        data: [173, 32],
        title: 'Zona',
    },
    e = {
        id: "e",
        labels: ['Frequentemente', 'Raramente', 'Nunca'],
        data: [20,20, 20],
        title: 'Frequência de uso',
    },
    f = {
        id: "f",
        labels: ['Resolução de problemas simples', 'Geração e correção de textos e códigos', 'Pesquisas e auxílio acadêmico', 'Geração de imagens, vídeos, áudios, etc', 'Dúvidas quanto a problemas complexos', 'Não uso'],
        data: [20,20, 20, 20, 20, 20],
        title: 'Principal uso',
    },
    g = {
        id: "g",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [20,20, 20, 20],
        title: 'Conhecimento quanto aos Efeitos na Sociedade',
    },
    h = {
        id: "h",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [20,20, 20, 20],
        title: 'Conhecimento quanto aos Impactos no Meio Ambiente',
    },
    i = {
        id: "i",
        labels: ['Conheço bastante', 'Conheço razoavelmente', 'Conheço pouco', 'Não conheço'],
        data: [55, 31, 33, 86],
        title: 'Sabe o que é um data center',
    },
    j = {
        id: "j",
        labels: ['Tenho conhecimento', 'Conheço um pouco', 'Não tenho conhecimento'],
        data: [36, 88, 79],
        title: 'Conhecimento quanto à coleta de dados',
    },
    k = {
        id: "k",
        labels: ['Sim', 'Pode dificultar', 'Não'],
        data: [59, 83, 61],
        title: 'Acredita que as IAs pode dificultar a busca por emprego',
    },
    l = {
        id: "l",
        labels: ['Positivamente', 'Negativamente', 'Depende', 'Não sei'],
        data: [18, 12, 166, 9],
        title: 'Como a expansão das IAs afetará o futuro',
    }
];

for (item of info){
    ctx = document.getElementById(item.id).getContext("2d");
    const grafic = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: item.labels,
            datasets: [{
                data: item.data,
                backgroundColor:['#1b7b3d', '#2dc48d', '#b7ff90','#73d6ee','#1a67a5', '#0d3b66',],
                borderWidth: 0.4,
                borderColor: '#0a3323',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 11 }
                    },
                },
                title: {
                    display: true,
                    text: item.title,
                    color: '#0a3323',
                    font: { size: 20 },
                    padding: { bottom: 5 }
                }
            }
        }
    });
}