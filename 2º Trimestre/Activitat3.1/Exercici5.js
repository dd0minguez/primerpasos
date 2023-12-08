  Alerta = setInterval(sensor, 1000)
  function valorSensor(max) {
    return Math.floor(Math.random() * max);
  }
function sensor(){
    Random = valorSensor(45);
    if(Random > 40){
        console.log("Temperatura alta, llamar a los bomberos")
        clearInterval(Alerta)
    }
    console.log(Random)
}
  