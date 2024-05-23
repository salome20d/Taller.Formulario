document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    var edad = document.getElementById('edad').value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var sueldo = parseFloat(document.getElementById('sueldo').value);
    var saldo = parseFloat(document.getElementById("saldo").value);
    
    var tasaDeReemplazo = 0.6;
    var pensionEstimada = (sueldo * edad * tasaDeReemplazo) / 12;
    var fondoEstimado = (edad * sueldo) + saldo;

    console.log('Edad:', edad);
    console.log('Sexo:', sexo);
    console.log('Sueldo Mensual ($):', sueldo);
    console.log('Saldo Actual ($):', saldo);
    console.log("Pensión Estimada: $" + pensionEstimada.toFixed(2));
    console.log("Fondo Estimado: $" + fondoEstimado.toFixed(2));
});
