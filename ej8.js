let tipoCliente = "preferencial";
if(tipoCliente == "normal"){
    console.log(`Va a ser atendido en el módulo 1, por ser cliente ${tipoCliente}`);
}else if(tipoCliente == "preferencial"){
    console.log("Están habilitados los módulos 2 y 3 para su atención");
}else{
    console.log("Usted no es cliente del banco, por favor dirijase al módulo 4")
}