function Mostrar()
{
//tomo la edad  

    var edad;
    var estadoCivil;

    edad= document.getElementById("edad").value;
    edad= parseInt (edad);

estadoCivil = document.getElementById("estadoCivil").value;
estadoCivil = estadoCivil.toLowerCase();
//cuando quiero todo en mayusculas variable.toUpperCase()

if (estadoCivil == "soltero" && edad >= 18 )
{
alert ("es soltero y no es menor");
}


}//FIN DE LA FUNCIÓN