let encendido = false;
let velocidad = 105;
if(encendido){
    console.log(`Su carro está encendido`);
    if(velocidad == 0){
        console.log(`Carro freno`);
    }else if(velocidad > 0 && velocidad <= 100){
        console.log(`carro en marcha`);
    }else{
        console.log(`evitese un accidente, exceso de velocidad`);
    } 
}else{
    console.log(`Encienda su vehículo`);
}