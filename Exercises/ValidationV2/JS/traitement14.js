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

    if(valideExiste()===true)
    {
        valide=true;
    }
    return valide;
}
function valideExiste()
{
    var valide=false;

    while(valide===false)
    {
        if (document.getElementById("txtNbre1").value==="")
        {
            document.getElementById("txtNbre1").style.backgroundColor = "red";
            document.getElementById("txtNbre2").style.backgroundColor = "red";
            document.getElementById("txtOperateur").style.backgroundColor = "red";
        }
        else if(document.getElementById("txtNbre2").value==="")
        {
            document.getElementById("txtNbre1").style.backgroundColor = "red";
            document.getElementById("txtNbre2").style.backgroundColor = "red";
            document.getElementById("txtOperateur").style.backgroundColor = "red";
        }
        else if(document.getElementById("txtOperateur").value==="")
        {
            document.getElementById("txtNbre1").style.backgroundColor = "red";
            document.getElementById("txtNbre2").style.backgroundColor = "red";
            document.getElementById("txtOperateur").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("txtNbre1").style.backgroundColor = "white";
            document.getElementById("txtNbre2").style.backgroundColor = "white";
            document.getElementById("txtOperateur").style.backgroundColor = "white";
            valide=true;
        }
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

