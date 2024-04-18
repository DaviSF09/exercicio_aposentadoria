const nome = "Davi"
const sexo = "M"
const idade = 60
const contrib = 35
const total = (idade+contrib)


if (sexo == "M"){
    if (contrib >= 35 && total >= 95 ){
        console.log(`${nome}, você pode se aposentar!`)}

    else{
        console.log(`${nome}, você não pode se aposentar!`)}
}


if (sexo == "F"){
    if (contrib >= 30 && total >= 85 ){
        console.log(`${nome}, você pode se aposentar!`)}
    
    else{
        console.log(`${nome}, você não pode se aposentar!`)}
}