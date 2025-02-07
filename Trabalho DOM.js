function enviarfeedback(){
    let inputnome = document.querySelector(".nomeinput");
    let inputfeed = document.querySelector(".feedbackinput");

    if(inputnome.value===""){
        if(inputfeed.value===""){ 
            alert("Digite seu nome e um feedback")}
        if(inputfeed.value!=""){ 
            alert("Digite um nome")}
    }
    if((inputfeed.value==="" && inputnome.value!="")){
        alert("Digite um feedback")
    }

    if(inputnome.value!="" && inputfeed.value!=""){
        let nome = document.createElement("h2");
        let feedback = document.createElement("p");
        let comentario = document.createElement("div");

        nome.innerText = inputnome.value;
        feedback.innerText = inputfeed.value;

        comentario.classList.add("comentario");
        nome.classList.add("itemh2");
        feedback.classList.add("itemp");

        comentario.append(nome);
        comentario.append(feedback);

        let quadro = document.querySelector(".listafeedbacks");
        quadro.append(comentario);

        inputnome.value = "";
        inputfeed.value = "";
    }
    
    
}
    



let button_enviar = document.querySelector(".enviar");
button_enviar.addEventListener("click",enviarfeedback);