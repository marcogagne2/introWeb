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
    calculer(nbr1,nbr2,Symbole);
    document.getElementById("lblMessage").innerHTML = "Votre Résultat est: "+ calculer();
}
function validechampobli()
{
    var valide=false;

    if(valideExiste()===true)
    {

    }
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

