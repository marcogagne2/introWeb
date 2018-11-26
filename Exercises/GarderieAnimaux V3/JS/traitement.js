var ChoixVet,NbrJours,NbrHeures,Toilettage,Toilettagemot,race,cout,Total,Rabais,CoutVet,Nomclient,NumClient;


function btnCalculer_onclick()
{
    if(validechampobli()===true)
    {
        Saisir();
    }
    fcttoilettage();
    fctcoutanimaux();
    fctrabais();
    choixVette();

    Total=((NbrJours*cout)+(((NbrJours*cout)*14.975)/100)+Toilettage+CoutVet)-Rabais;

    document.getElementById("lblMessage").innerHTML =("Vétérinaire responsable est "+ ChoixVet+".Le montant est de "+Total.toFixed(2)+" pour "+NbrJours+" jours ,"+Toilettagemot+" service de toilettage."+
    "et le cout de votre vétérinaire est de "+CoutVet)
}
function Saisir()
{
    ChoixVet = document.getElementById("lstVeterinaire").value;
    NbrJours = parseInt(document.getElementById("txtNbreJours").value);
    NbrHeures = parseInt(document.getElementById("txtNbreHeures").value);
    Nomclient=document.getElementById("txtNom").value;
    NumClient=document.getElementById("txtNum").value;
}
function validechampobli()
{
    var Boite= new Array("txtNbreJours","txtNbreHeures","txtNom","txtNum");
    var valide=false;

    for(i = 0 ; i < Boite.length ; i++)
    {
        if(valideExiste(Boite[i])===true)
        {
            valide=true;
        }
    }
    return valide;

}
function valideExiste(couleur)
{
    var valide=false;

    if(document.getElementById(couleur).value === "")
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
function radChoix1_onclick()
{
    if(document.getElementById("radimgChien").checked == true)
    {
        document.getElementById("Img").innerHTML = "<img src='img/Dog.jpg'>";
    }
    else
    {
        document.getElementById("Img").innerHTML = "<img src='img/lime-cat.jpg'>";
    }
}
function  fcttoilettage()
{
    if(document.getElementById("chkServ").checked == true)
    {
        Toilettage=5;
        Toilettagemot="avec";
    }
    else
    {
        Toilettage=0;
        Toilettagemot="sans";
    }
}
function fctcoutanimaux()
{
    if(document.getElementById("radChien").checked == true)
    {
        race = "chien";
        cout = 18.50;
    }
    else
    {
        race= "chat";
        cout=  16.95;
    }
}
function fctrabais()
{
    if(NbrJours>=1&&NbrJours<5)
    {
        Rabais=0
    }
    else if(NbrJours>=5&&NbrJours<10)
    {
        Rabais=(cout*5)/100
    }
    else if(NbrJours>=10&&NbrJours<30)
    {
        Rabais=(cout*10)/100
    }
    else
    {
        Rabais=(cout*15)/100
    }
}
function choixVette()
{
    switch(ChoixVet)
    {
        case "Audrey Bouchard":CoutVet=NbrHeures*25;
            break;
        case "Stéphane Tremblay":CoutVet=NbrHeures*35;
            break;
        case "Maxime Simard":CoutVet=NbrHeures*40;
            break;
        case "Mélissa Caron":CoutVet=NbrHeures*45;
            break;
    }
}