function frmMembre_onsubmit()
{
    var resultat;
    var valide = false;
    if(valideTousChampsObligatoire()===true)
    {
        if(valideFormat()===true)
        {
            document.getElementById("lblMessageErreur").innerHTML="";
            resultat = confirm();

            if(resultat === true)
            {
                valide = true;
                prix = asignation();
                document.getElementById("lblPrix").innerHTML="Cela vous couterai " + prix + " $";
            }

        }
    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML="Tous les champs ayant une étoiles sont obligatoires";
    }
    return valide;
}
function valideTousChampsObligatoire()
{
    var TabObli=new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");
    var valide=false;

    for(i = 0; i <TabObli.lenght;i++)
    {
        if(valideExiste(TabObli[i])===true)
        {
            valide=true;
        }
    }
    return valide;

}
function valideExiste(Valide)
{
    var valide=false;

    if(document.getElementById(Valide).value ==="")
    {
        document.getElementById(Valide).style.borderColor = "red";
        valide=false;
    }
    else
    {
        document.getElementById(Valide).style.borderColor  = "white";
        valide=true;
    }
    return valide;
}
function valideFormat()
{
    var valide=true;
    var TabDonnes = new Array("txtNom", "txtPrenom","txtVille", "txtTel", "txtCodePostal");

    if(valideCaractere(TabDonnes[0])===false)
    {
        valide=false;
        document.getElementById("txtNom").style.borderColor = "red"
    }
    else if (valideCaractere(TabDonnes[0])===true)
    {
        document.getElementById("txtNom").style.borderColor = "";
    }
    if(valideCaractere(TabDonnes[1])===false)
    {
        valide=false;
        document.getElementById("txtPrenom").style.borderColor = "red"
    }
    else if (valideCaractere(TabDonnes[1])===true)
    {
        document.getElementById("txtPrenom").style.borderColor = "";
    }
    if(valideCaractere(TabDonnes[2])===false)
    {
        valide=false;
        document.getElementById("txtVille").style.borderColor = "red"
    }
    else if (valideCaractere(TabDonnes[2])===true)
    {
        document.getElementById("txtVille").style.borderColor = "";
    }
    if(validerCodePostreg(TabDonnes[3])===false)
    {
        valide=false;
        document.getElementById("txtTel").style.borderColor = "red"
    }
    else if (valideCaractere(TabDonnes[3])===true)
    {
        document.getElementById("txtTel").style.borderColor = "";
    }
    if(validerTelereg(TabDonnes[4])===false)
    {
        valide=false;
        document.getElementById("txtCodePostal").style.borderColor = "red"
    }
    else if (valideCaractere(TabDonnes[4])===true)
    {
        document.getElementById("txtCodePostal").style.borderColor = "";
    }
    return valide;
}
function validerCaractere(Reg)
{
    return /^([A-z]{0,})\-?([A-z]{0,})$/.test(Reg);
}
function validerCodePostreg(Reg)
{
    return /^(([0-9][A-z][0-9])\ ([A-z][0-9][A-z]))|^(([A-z][0-9][A-z])\ ([0-9][A-z][0-9]))/.test(Reg);
}
function validerTelereg(Reg)
{
    return /^(\((\d{3})\)\ (\d{3})\-(\d{4}))|^((\d{3})\-(\d{3})\-(\d{4}))/.test(Reg);
}
function validerCodePermreg(Reg)
{
    return /^([A-z]{4})(\d{8})$/.test(Reg);
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
function confirme()
{
    var result;
    var r = confirm("est-ce que vous avez rentrez les bonnes informations");

    if (r === true)
    {
        result = true;
    }
    else
    {
        result = false;
    }
    return result;
}

function asignation(sorte)
{
    var prix, sorte;
    sorte = document.getElementById("type").value;
    switch(type)
    {
        case"adulte":
        {
            prix = 90;
            break;
        }
        case"retraité":
        {
            prix = 80;
            break;
        }
        case "étudiant":
        {
            prix = 60;
            break;
        }
    }
    return prix;

}