function btnCalculer_onclick()
{
    if(validechampobli()===true)
    {
        saisir();
    }
}
function saisir()
{
    var nbr1,nbr2,Symbole;

    nbr1=parseInt(document.getElementById("txtNbre1").value);
    nbr2=parseInt(document.getElementById("txtNbre2").value);
    Symbole=document.getElementById("txtOperateur").value;
    document.getElementById("lblMessage").innerHTML = "Votre Résultat est: "+ calculer(nbr1,nbr2,Symbole);
}
function validechampobli()
{
    var valide=false;

    if(valideExiste("txtNbre1")===true&&valideExiste("txtNbre2")===true&&valideExiste("txtOperateur")===true)
    {
        valide=true;
    }
    return valide;
}
function valideExiste(Valide)
{
    var valide=false;

    if(document.getElementById(Valide).value==="")
    {
        document.getElementById(Valide).style.backgroundColor = "red";
    }
    else
    {
        document.getElementById(Valide).style.backgroundColor = "white";
        valide=true;
    }
    return valide;
}
function calculer(nbr1,nbr2,Symbole)
{

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
    return Rep;
}

