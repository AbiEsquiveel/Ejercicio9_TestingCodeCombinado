document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        let num1 = parseFloat(document.getElementById('num1').value); // Convertir a número
        let num2 = parseFloat(document.getElementById('num2').value); // Convertir a número
        
        //Verificacion y Calculo
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('result').innerText = 'Por favor ingresa números válidos.';
        } else {
            let result = num1 + num2;
            document.getElementById('result').innerText = 'Resultado: ' + result;
        }
    });
});

//Errores: NO verificaba que los datos ingresados sean numeros y tampoco sumaba, solo mostraba lo ingresado.