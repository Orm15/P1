
miComboBox.onchange = function() {
    var valorC = document.getElementById("miComboBox").value;

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var estado = "";


    if(isNaN(num1) || isNaN(num2)){ //isNaN devuelve true si la variable no es un numero
        alert('Escribe numeros en los espacios que lo soliciten')
        
    }else{
        if(valorC == "1"){
            var result = num1 + num2;
        }else if(valorC == "2"){
            var result = num1 - num2;
        }else if(valorC == "3"){
            var result = num1 * num2;
        }else if(valorC == "4"){
            var result = num1 / num2;
        }else if (valorC == "5"){
            document.getElementById("resultado").value = "Selecciona una operacion";
            
        }

        document.getElementById("resultado").value = "";
        document.getElementById("resultado").value = result;
    }


    

};