function btnCalculer_onclick()
{
    var nbr1,nbr2,Signe;

    nbr1=document.getElementById("txtNbre1").value;
    nbr2=document.getElementById("txtNbre2").value;

    if (((nbr1>=0)&&(nbr2>=0))||((nbr1<0)&&(nbr2<0)))
    {
        Signe="Positif";
    }
    else
    {
         Signe="Negatif"
    }

    document.getElementById("lblMessage").innerHTML = "Votre signe de votre resultat est "+ Signe;
}