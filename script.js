function calcularPromedio() {
  // Nombres y nota de cada evaluación
  let nombres = ["1er Parcial", "2do Parcial", "Tareas", "Proyecto", "Examen Final"];
  let maximos = [15, 15, 25, 10, 35];
  let total = 0;

let i = 0;
while (i < nombres.length) {
  let notaTexto = prompt("Ingresa la nota de " + nombres[i] + " (máximo " + maximos[i] + " puntos):");
  let nota = Number(notaTexto);
  if (isNaN(nota) || nota < 0 || nota > maximos[i]) {
    alert("Nota inválida para " + nombres[i] + ". Intenta de nuevo.");
    continue; // salta al siguiente ciclo (pero ojo con i++)
  }
  total += nota; //sumaremos las notas si son validas entre mi rango
  i++; // avanza solo si las nota ingresada es correcta si no regresa

  // Mostrar resultado
  let mensajeFinal = "";
  if (total >= 60) {
    mensajeFinal = "Aprobado con " + total + " puntos.";
  } else {
    mensajeFinal = "Reprobado con " + total + " puntos.";
  }

  alert(mensajeFinal); // Muestra alerta
  document.getElementById("resultado").textContent = mensajeFinal; // Muestra en HTML
}