text = "Hola, mundo"

if(text.length >0){
    let textoNuevo = ""

    for(let i = 0; i < text.length - 1; i++){
        textoNuevo += text[i];
    }
    text = textoNuevo
}


array = [1,2,3,4,5]

let valorNuevos = array.slice(-1)
console.log(valorNuevos)