function Mostrar()
{
//tomo la edad  

var edad= document.getElementById("edad").value;
edad=parseInt (edad);
if (edad >= "18")
{
    alert("usted es mayor de edad");
}
else
{
    if (edad >= "13")
   {
     alert ("usted es adolecente").break;
   }
    else (edad < "13")
    {
     alert ("usted es un niño");
    }
}

{}



}//FIN DE LA FUNCIÓN