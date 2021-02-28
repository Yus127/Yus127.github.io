function procesarDatos(){
		var peso = document.getElementById("peso").value;
    var estatura = document.getElementById("estatura").value;
    var imc = peso/(estatura*estatura);
		
    var texto="";
    var col="";
    if (imc <= 18.5){
      texto= "Bajo de peso";
        col = "#B6BC00";
    } else if (imc >=18.5 && imc<=24.99){
      texto= "Peso saludable ";
         col = "#029000";
    } else if (imc >=25 && imc <=29.99){
      texto= "Sobrepeso ";
         col = "#F63737";
    }
      else if (imc >=30 && imc <=34.99){
      texto= "Obesidad grado 1 ";
          col = "#E50B4D";
    }
    else if (imc >=35 && imc <=39.99){
      texto= "Obesidad grado 2 ";
        col = "#B90909";
    }
    else if(imc >=40 ) {
      texto= "Obesidad mórbida ";
        col= "#7D0B0B";
    }
    document.getElementById("saludo").innerHTML= Math.round(imc);
        document.getElementById("saludo").style.color = col;

        document.getElementById("descript").innerHTML=texto;
}