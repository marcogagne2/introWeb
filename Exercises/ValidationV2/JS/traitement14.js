function btnCalculer_onclick()
{
    if(validechampobli()=== true)
    {
        if(valideFormats()=== true)
        {
            saisir();
        }
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
    var boite = new Array("txtNbre1","txtNbre2","txtOperateur");
    var valide=false;

    for(i=0;i<boite.length;i++)
    {
        if(valideExiste(boite[i])===true)
        {
            valide=true;
        }

    }
    return valide;
}
function valideExiste(couleur)
{
    var valide=false;

    if(document.getElementById(couleur).value ==="")
    {
        document.getElementById(couleur).style.backgroundColor = "red";
        valide=false;
    }
    else
    {
        document.getElementById(couleur).style.backgroundColor = "white";
        valide=true;
    }
   return valide;

}
function valideFormats()
{
    var valide=true;

    if(valideNo(document.getElementById("txtNbre1").value)===false)
    {
        document.getElementById("txtNbre1").style.backgroundColor = "red";
        valide=false;
    }
    if(valideNo(document.getElementById("txtNbre2").value)===false)
    {
        document.getElementById("txtNbre2").style.backgroundColor = "red";
        valide=false;
    }
    if(valideOperateur(document.getElementById("txtOperateur").value)===false)
    {
        document.getElementById("txtOperateur").style.backgroundColor = "red";
        valide=false;
    }
    return valide;
}
function valideNo(chaine)
{
    return /^\d$/.test(chaine);
}
function valideOperateur(Chaine)
{
    return /^(\+)$|^(\-)$|^(\/)$|^(\*)$/.test(Chaine);
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

