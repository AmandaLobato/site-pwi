const input1 = document.querySelector("#username")
const input2 = document.querySelector("#password")

function checar(){
    let acesso = false
    let loginDataBase = {
        nome: ["Amanda", "Emanuel"],
        senha: ["123", "123"]
    }

    let cadastroLength = loginDataBase.nome.length

    for (let i=0; i<cadastroLength; i++){
        let userLogin = loginDataBase.nome[i]
        let passwordLogin = loginDataBase.senha[i]
        if (userLogin == input1.value && passwordLogin == input2.value){
            acesso = true
        }
    }

    if (acesso){
        alert("Login efetuado com sucesso!")
        window.location.href = "index.html"
    } else {
        if (input1.value == "" || input2.value == ""){
            alert("Preencha todos os campos")
        } else {
            alert("Usuário ou senha incorretos!")
        }
    }
}