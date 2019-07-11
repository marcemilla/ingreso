function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
num=Math.round(Math.random()*(10-1)+parseInt(1));
if (num >= 9)
{
	alert(num + " EXCELENTE");
}
else 
{
	if (num >= 4)
	{
		alert (num +" APROBO");
	}
	else 
	{
	alert (num +" Vamos,la proxima se puede");
	}
}
}//FIN DE LA FUNCIÓN