function btnCalculer_onclick()
{ 
 	var nbr1,nbr2,Symbole,Rep;

 	nbr1=parseInt(document.getElementById("txtNbre1").value);
    nbr2=parseInt(document.getElementById("txtNbre2").value);
    Symbole=document.getElementById("txtOperateur").value;

    switch(Symbole)
        {
        case '+':Rep=nbr1+nbr2;
        break;
        case '-':Rep=nbr1-nbr2;
        break;
        case '*':Rep=nbr1*nbr2;
        break;
        case '/':Rep=nbr1/nbr2;
        break;
        }


    document.getElementById("lblMessage").innerHTML = "Votre Résultat est: "+ Rep;

}