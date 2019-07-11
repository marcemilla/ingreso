function Mostrar()
{
//tomo la edad  

var edad =document.getElementById("edad").value;
edad=ParseInt(edad);

if  (edad  > "13" && edad < "18" )
{
}
else 
{
    alert ("usted no es adolecente");
}
}//FIN DE LA FUNCIÓN