let amigos = [];
let amigosSorteio = amigos;

function adicionar(){
    let amigo = document.getElementById("nome-amigo").value.trim();
    let lista = document.getElementById("lista-amigos");

    if(amigo == ""){
        alert("Informe o nome de um amigo.");
        return;
    }

    if(amigos.includes(amigo)){
        alert("Este amigo já está na lista.");
        document.getElementById("nome-amigo").value = "";
        return;
    }

    amigos.push(amigo);
    amigos.sort();
    document.getElementById("nome-amigo").value = "";
    lista.textContent = amigos.join(", ");
    document.getElementById("nome-amigo").focus();
}

function sortear(){

    if(amigosSorteio.length < 3) {
        alert("informe pelo menos 3 amigos.");
        return;
    }

    embaralha(amigosSorteio);
    document.getElementById("lista-sorteio").textContent = "";
    let sorteio = document.getElementById("lista-sorteio");
    
    for(let i=0; i < amigosSorteio.length; i++){
        if(i == amigosSorteio.length-1){
            sorteio.innerHTML = sorteio.innerHTML + amigosSorteio[i] + "->" + amigosSorteio[0] + "<br>";
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigosSorteio[i] + "->" + amigosSorteio[i+1] + "<br>";
        }
    }

}

function reiniciar(){
    amigos = [];
    amigosSorteio = amigos;
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";

}

function embaralha(lista){

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

window.onload = function() {
    document.getElementById("nome-amigo").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            adicionar();
        }
    });

}