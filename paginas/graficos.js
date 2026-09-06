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
        labels: ['Abaixo de 18', '18 - 25', '26 - 59', 'Acima de 60'],
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
        data: [20,20],
        title: 'Zona',
    },
    e = {
        id: "e",
        labels: ['Frequentemente', 'Raramente', 'Nunca'],
        data: [20,20, 20],
        title: 'Frequência',
    },
];

for (item of info){
    ctx = document.getElementById(item.id).getContext("2d");
    const grafic = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: item.labels,
            datasets: [{
                data: item.data,
                backgroundColor:['#FF6384', '#36A2EB', '#ebcd36','#36eb5d','#cd36eb',],
                borderWidth: 0
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
                    font: { size: 20 },
                    padding: { bottom: 5 }
                }
            }
        }
    });
}