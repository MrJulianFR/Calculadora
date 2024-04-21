let resultado = document.querySelector(".calculadora-salida");
let botones = document.querySelectorAll(".btn");
let ultimoApretado = null;


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        // if(resultado.textContent.length === 14){
        //     resultado.textContent = resultado.textContent.slice(0, -1)
        //     return
        // }

        if(boton.id === "igual" && resultado.textContent.length > 0){
            resultado.textContent = eval(resultado.textContent)
            return
        }

        if(boton.classList.contains("signo")){
            if(resultado.textContent === "0"){
                resultado.textContent = "0";
                return
            }
            if(ultimoApretado == "btn signo"){
                console.log(ultimoApretado + " " + boton.textContent)
                resultado.textContent = resultado.textContent.slice(0, -1);
                resultado.textContent += botonApretado
                return
            }
        }
        if(boton.id === "c"){
            resultado.textContent = "0"
            return
       }
       if(boton.id === "borrar"){
            if(resultado.textContent.length === 1){
                resultado.textContent = "0"
            } else{
                resultado.textContent = resultado.textContent.slice(0, -1)
            }
            return
        }
        if(resultado.textContent == "0"){
            resultado.textContent = botonApretado;
        }
        else{
            resultado.textContent += botonApretado;
        }
        ultimoApretado = boton.className;
    })
});
