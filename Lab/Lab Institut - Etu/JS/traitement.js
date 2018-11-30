function frmMembre_onclick()
{
    if(valideTousChampsObligatoire()===true)
    {
        if(valideFormat()===true)
        {

        }
    }

}
function valideTousChampsObligatoire()
{
    var TabObli=new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");
    var valide=false;

    for(i=0;TabObli.lenght;i++)
    {
        if(valideExiste(TabObli[i])===true)
        {
            valide=true;
        }
    }
    return valide;

}
function valideExiste()
{
    var valide=false;
}
function valideFormat()
{
    
}
function Nomreg()
{
    
}
function Prenomreg()
{

}
function Adressereg()
{

}
function Villereg()
{

}
function CodePreg()
{

}
function Telereg()
{

}
function CodePermreg()
{

}
function saisir()
{
    var Nom,Prenom,Adresse,Ville,Codepostal,Telephone,Codeperma,Categorie;

    Nom=document.getElementById("txtNom").value;
    Prenom=document.getElementById("txtPrenom").value;
    Adresse=document.getElementById("txtAdresse").value;
    Ville=document.getElementById("txtVille").value;
    Codepostal=document.getElementById("txtCodePostal").value;
    Telephone=document.getElementById("txtTel").value;
    Codeperma=document.getElementById("txtCodePerm").value;
    Categorie=document.getElementById("type").value;

}