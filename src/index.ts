type tarefa = {
    name: string,
    responsavel: string
};

function mostra_tarefa(tarefa: tarefa) {
    console.log(tarefa)
};

console.log('olá mundo!')

let tarefa_n1 = {
    name: "Arrumar Cama",
    responsavel: "Mateus"
}

mostra_tarefa(tarefa_n1)