let opcao = ""
let vagas = []




let criarVaga = function(){
    let novaVaga = {}
    novaVaga.nome = prompt("Qual o nome da vaga? ")
    novaVaga.desc = prompt("Descreva a vaga")
    novaVaga.data = prompt("Data Limite para a vaga")
    novaVaga.candidatos = []
    const confirmacao = confirm(
        "Salvar essa vaga? \n" +
        "\nVaga: " + novaVaga.nome +
        "\nDescrição: " + novaVaga.desc + 
        "\nData Limite: " + novaVaga.data
    )
    if(confirmacao){
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    }
}

let listarVagas = function(){
    if(vagas.length == 0){
        return alert("Não existem vagas cadastradas no momento")
     }
     let pessoas = ""
   for(let i = 0; i < vagas.length; i++){
    pessoas+= "Nome da vaga: " + vagas[i].nome +
    "\nIndice: " + (i+1) +
    "\nNumero de candidatos: " + vagas[i].candidatos.length +
    "\n----------------------------------\n"
   }
   alert(pessoas)
}

let vizualizarVagas = function(){
    const verVaga = Number(prompt("Qual o indice da vaga deseja ver?")) -1
    if(vagas.length == 0){
         alert("Não existem vagas cadastradas no momento")
     } else if(verVaga >= vagas.length|| verVaga < 0 ){
        return alert("índice inválido, tente novamente")
     }
    
    if(vagas[verVaga]){
        alert("Indice: " + (verVaga + 1) + "\n" +
            "nome: " + vagas[verVaga].nome + "\n" +
            "\ndescrição: " + vagas[verVaga].desc +
            "\nData limite : " + vagas[verVaga].data + 
            "\nCandidatos: " + vagas[verVaga].candidatos + 
            "\nTotal: " + vagas[verVaga].candidatos.length
        )
    }
}

let inscreverCandidato = function(){
    const nome = prompt("Digite o nome do candidato")
    const indice = Number(prompt("Digite o índice da vaga desejada")) -1
    const vaga = vagas[indice]
    const confirmar = confirm("Candidatar " + nome + " a vaga " +
            "\nnome: " + vaga.nome  +
            "\ndescrição: " + vaga.desc +
            "\nData limite : " + vaga.data
        )
    if(confirmar){
        vaga.candidatos.push(nome)
        alert("Candidato: " + nome + " inscrito!")
    }
}

let excluirVaga = function(){
    const indice = Number(prompt("Digite o índice da vaga a ser excluída")) -1
    const vaga = vagas[indice]
    const confirmar = confirm("Deseja excluir a seguinte vaga:\n" +
        "\nnome: " + vaga.nome  +
        "\ndescrição: " + vaga.desc +
        "\nData limite : " + vaga.data
    )
    if(confirmar){
        vagas.splice(indice, 1)
        alert("Vaga Removida com Sucesso!")
    }
}

do{
    opcao = Number(prompt("Bem vindo ao Sistemas de vagas de Emprego !" +
        "\nO que deseja? :\n" +
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Vizualizar uma vaga específica" +
        "\n4. Inscrever um candidato em uma vaga" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    ))
    switch(opcao){
        case 1:
           listarVagas()
            break
        case 2:
            criarVaga()
            break
        case 3:
            vizualizarVagas()
            break
        case 4:
            inscreverCandidato()
            break
        case 5:
            excluirVaga()
            break
        case 6:
            alert("Obrigado por usar o app!!" + 
                "\nEncerrando")
            break
        default:
            alert("Valor inválido, tente novamente")
            break
    }
} while(opcao !== 6)