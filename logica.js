
miComboBox.onchange = function() {
    var valorC = document.getElementById("miComboBox").value;

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let resultado;

    if(isNaN(num1) || isNaN(num2)){ //isNaN devuelve true si la variable no es un numero
        alert('Escribe numeros en los espacios que lo soliciten')
        document.getElementById("miComboBox").value= "5";
        document.getElementById("resultado").value = "";
    }else{
        if(valorC == "1"){
             result = num1 + num2;
        }else if(valorC == "2"){
             result = num1 - num2;
        }else if(valorC == "3"){
             result = num1 * num2;
        }else if(valorC == "4"){
             result = num1 / num2;
        }else if (valorC == "5"){
            document.getElementById("resultado").value = "Selecciona una operacion";
            
        }
        document.getElementById("miComboBox").value= "5";
        document.getElementById("resultado").value = "";
        document.getElementById("resultado").value = result;
    }


    

};