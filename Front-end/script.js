const formulario = document.querySelector("form");
const Iname = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Iteleone = document.querySelector(".telefone");

function cadastrar (){
    fetch("http://localhost:8080/usuario",
        {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Iname.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Iteleone.value})
    })
    .then(function (res){ console.log(res)})
    .catch(function(res){console.log(res)})
};

function limpar(){
    Iname.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Iteleone.value = "";
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    cadastrar();
    limpar();
    
});
