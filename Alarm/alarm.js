let timeSeconds = prompt("Ingrese los segundos que desea esperar para que llegue la alerta");
console.log(timeSeconds);
setTimeout(timer, timeSeconds*1000);
function timer() {
    alert("Se terminó el tiempo");
  }