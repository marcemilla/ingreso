function Mostrar()
{
//tomo la edad  
var edad =document.getElementById("edad").value;
edad = parseInt (edad);
if (edad >= 18)
{
    alert (edad +" usted es mayor de edad");
}
else
 {
    alert ( " usted es menor de edad");
 }
}//FIN DE LA FUNCIÓN